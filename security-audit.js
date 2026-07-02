
const fs = require('fs');
const path = require('path');

class SecurityAudit {
  constructor() {
    this.issues = [];
    this.warnings = [];
    this.passed = [];
  }

  addIssue(category, description, severity = 'medium') {
    this.issues.push({ category, description, severity });
  }

  addWarning(category, description) {
    this.warnings.push({ category, description });
  }

  addPassed(category, description) {
    this.passed.push({ category, description });
  }

  checkPackageJson() {
    console.log('🔍 Checking package.json for vulnerable dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Check for outdated packages that might have vulnerabilities
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Known vulnerable patterns
      const vulnerablePatterns = [
        { name: 'lodash', version: '<4.17.21', reason: 'Prototype pollution vulnerabilities' },
        { name: 'axios', version: '<0.21.2', reason: 'SSRF vulnerabilities' },
        { name: 'node-fetch', version: '<2.6.7', reason: 'Information disclosure' }
      ];

      let foundVulnerabilities = false;
      for (const [pkg, version] of Object.entries(dependencies)) {
        const vulnerable = vulnerablePatterns.find(v => v.name === pkg);
        if (vulnerable) {
          this.addIssue('Dependencies', `${pkg}@${version} - ${vulnerable.reason}`, 'high');
          foundVulnerabilities = true;
        }
      }

      if (!foundVulnerabilities) {
        this.addPassed('Dependencies', 'No known vulnerable dependency patterns found');
      }

    } catch (error) {
      this.addIssue('Dependencies', 'Could not read package.json', 'medium');
    }
  }

  checkNextConfig() {
    console.log('🔍 Checking Next.js configuration for security issues...');
    
    try {
      const configContent = fs.readFileSync('next.config.ts', 'utf8');
      
      // Check for dangerous configurations
      if (configContent.includes('ignoreBuildErrors: true')) {
        this.addWarning('Next.js Config', 'TypeScript errors are ignored during build - potential type safety issues');
      }

      if (configContent.includes('ignoreDuringBuilds: true')) {
        this.addWarning('Next.js Config', 'ESLint is ignored during builds - potential code quality issues');
      }

      // Check for security headers
      if (!configContent.includes('X-Frame-Options') && !configContent.includes('X-Content-Type-Options')) {
        this.addIssue('Security Headers', 'Missing security headers in Next.js config', 'medium');
      } else {
        this.addPassed('Security Headers', 'Some security considerations found in config');
      }

    } catch (error) {
      this.addWarning('Next.js Config', 'Could not read next.config.ts');
    }
  }

  checkEnvironmentVariables() {
    console.log('🔍 Checking for environment variable security...');
    
    // Check for .env files that might be exposed
    const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
    let foundEnvFiles = false;

    envFiles.forEach(file => {
      if (fs.existsSync(file)) {
        foundEnvFiles = true;
        // Check if it's in .gitignore
        try {
          const gitignore = fs.readFileSync('.gitignore', 'utf8');
          if (!gitignore.includes('.env')) {
            this.addIssue('Environment', `${file} found but .env files not in .gitignore`, 'high');
          }
        } catch {
          this.addIssue('Environment', `${file} found but no .gitignore to protect it`, 'high');
        }
      }
    });

    if (!foundEnvFiles) {
      this.addPassed('Environment', 'No environment files found in root directory');
    }
  }

  checkClientSideCode() {
    console.log('🔍 Checking client-side code for security issues...');
    
    const srcDir = 'src';
    if (!fs.existsSync(srcDir)) return;

    this.checkDirectory(srcDir);
  }

  checkDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.checkDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
        this.checkFile(filePath);
      }
    });
  }

  checkFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for dangerous patterns
      const dangerousPatterns = [
        {
          pattern: /dangerouslySetInnerHTML/g,
          message: 'dangerouslySetInnerHTML usage found - potential XSS risk',
          severity: 'medium'
        },
        {
          pattern: /eval\(/g,
          message: 'eval() usage found - potential code injection risk',
          severity: 'high'
        },
        {
          pattern: /document\.write/g,
          message: 'document.write usage found - potential XSS risk',
          severity: 'medium'
        },
        {
          pattern: /innerHTML\s*=/g,
          message: 'innerHTML assignment found - potential XSS risk',
          severity: 'medium'
        },
        {
          pattern: /window\.location\.href\s*=.*(?:document\.|window\.)/g,
          message: 'Potential open redirect vulnerability',
          severity: 'high'
        }
      ];

      dangerousPatterns.forEach(({ pattern, message, severity }) => {
        const matches = content.match(pattern);
        if (matches) {
          this.addIssue('Client Code', `${filePath}: ${message} (${matches.length} occurrence${matches.length > 1 ? 's' : ''})`, severity);
        }
      });

      // Check for hardcoded secrets/keys
      const secretPatterns = [
        /(?:api[_-]?key|apikey)\s*[:=]\s*['"]\w+['"]/gi,
        /(?:secret|password|pwd|pass)\s*[:=]\s*['"]\w+['"]/gi,
        /(?:token|auth)\s*[:=]\s*['"]\w{20,}['"]/gi
      ];

      secretPatterns.forEach(pattern => {
        if (pattern.test(content)) {
          this.addIssue('Secrets', `${filePath}: Potential hardcoded secret found`, 'high');
        }
      });

    } catch (error) {
      // Silently continue if file can't be read
    }
  }

  checkAPIRoutes() {
    console.log('🔍 Checking API routes for security issues...');
    
    const apiDir = 'src/app/api';
    if (!fs.existsSync(apiDir)) {
      this.addPassed('API Security', 'No API routes found');
      return;
    }

    this.checkAPIDirectory(apiDir);
  }

  checkAPIDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.checkAPIDirectory(filePath);
      } else if (file === 'route.ts' || file === 'route.js') {
        this.checkAPIFile(filePath);
      }
    });
  }

  checkAPIFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for CORS issues
      if (!content.includes('cors') && !content.includes('Access-Control-Allow-Origin')) {
        this.addWarning('API Security', `${filePath}: No CORS configuration found - consider implementing proper CORS`);
      }

      // Check for input validation
      if (!content.includes('validate') && !content.includes('schema') && content.includes('request.')) {
        this.addWarning('API Security', `${filePath}: No obvious input validation found`);
      }

      // Check for rate limiting
      if (!content.includes('rate') && !content.includes('limit') && !content.includes('throttle')) {
        this.addWarning('API Security', `${filePath}: No rate limiting implemented`);
      }

      // Check for authentication
      if (!content.includes('auth') && !content.includes('token') && !content.includes('session')) {
        this.addWarning('API Security', `${filePath}: No authentication mechanism found`);
      }

    } catch (error) {
      // Silently continue if file can't be read
    }
  }

  checkHTTPS() {
    console.log('🔍 Checking HTTPS configuration...');
    
    // In development, HTTPS might not be configured, which is normal
    this.addPassed('HTTPS', 'HTTPS will be handled by Replit deployment automatically');
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🛡️  SECURITY AUDIT REPORT');
    console.log('='.repeat(60));

    if (this.issues.length > 0) {
      console.log('\n❌ SECURITY ISSUES FOUND:');
      this.issues.forEach((issue, index) => {
        const severity = issue.severity === 'high' ? '🔴 HIGH' : issue.severity === 'medium' ? '🟡 MEDIUM' : '🟢 LOW';
        console.log(`${index + 1}. [${severity}] ${issue.category}: ${issue.description}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.warnings.forEach((warning, index) => {
        console.log(`${index + 1}. ${warning.category}: ${warning.description}`);
      });
    }

    if (this.passed.length > 0) {
      console.log('\n✅ PASSED CHECKS:');
      this.passed.forEach((pass, index) => {
        console.log(`${index + 1}. ${pass.category}: ${pass.description}`);
      });
    }

    console.log('\n' + '='.repeat(60));
    console.log(`📊 SUMMARY: ${this.issues.length} issues, ${this.warnings.length} warnings, ${this.passed.length} passed`);
    
    const highSeverityIssues = this.issues.filter(i => i.severity === 'high').length;
    if (highSeverityIssues > 0) {
      console.log(`🚨 ${highSeverityIssues} HIGH SEVERITY ISSUES REQUIRE IMMEDIATE ATTENTION`);
    } else if (this.issues.length === 0) {
      console.log('🎉 NO CRITICAL SECURITY ISSUES FOUND!');
    }
    
    console.log('='.repeat(60));
  }

  run() {
    console.log('🚀 Starting security audit...\n');
    
    this.checkPackageJson();
    this.checkNextConfig();
    this.checkEnvironmentVariables();
    this.checkClientSideCode();
    this.checkAPIRoutes();
    this.checkHTTPS();
    
    this.generateReport();
    
    console.log('\n📋 RECOMMENDATIONS:');
    console.log('1. Run "npm audit" to check for known vulnerable dependencies');
    console.log('2. Implement Content Security Policy (CSP) headers');
    console.log('3. Add rate limiting to API endpoints');
    console.log('4. Implement proper input validation and sanitization');
    console.log('5. Use environment variables for sensitive configuration');
    console.log('6. Regularly update dependencies to latest secure versions');
  }
}

// Run the audit
const audit = new SecurityAudit();
audit.run();
