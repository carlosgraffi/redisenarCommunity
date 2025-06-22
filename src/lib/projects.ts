
// src/lib/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  type: 'climate-tech' | 'ai-tools' | 'community' | 'product-design';
  organization: string;
  description: string;
  longDescription?: string;
  duration?: string;
  impact?: string;
  technologies?: string[];
  projectUrl?: string | null;
  imageUrl?: string | null;
  tags?: string[];
  role: string;
  outcomes?: string[];
}

// Portfolio projects data based on Carlos Graffi's experience
const projects: Project[] = [
  {
    id: '1',
    slug: 'citycatalyst',
    title: "CityCatalyst: GHG Inventory Platform",
    year: "2022-2024",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Design Lead",
    description: "A web platform that reduces the time to create a greenhouse gas inventory from months to seconds, helping cities worldwide track and reduce their emissions.",
    longDescription: "CityCatalyst transforms how cities approach climate action by making greenhouse gas inventory creation accessible and fast. This platform translates complex technical frameworks like the Global Protocol for Community-Scale GHG Emissions into intuitive user flows that city officials can navigate with confidence.\n\nThe challenge was designing for a diverse global audience of city government staff, many with limited technical expertise, who needed to create accurate emissions inventories quickly.\n\nKey design decisions:\n- Simplified complex data input flows into guided step-by-step processes\n- Created visual data validation to help users identify and correct errors\n- Designed responsive dashboards that work across different devices and internet speeds\n- Built modular components that adapt to different city contexts and data availability\n\nThe platform now serves over 50 cities across Latin America, dramatically reducing the barrier to climate action planning.",
    duration: "2+ years",
    impact: "50+ cities using the platform",
    technologies: ['React', 'TypeScript', 'Data Visualization', 'API Design'],
    projectUrl: "https://citycatalyst.openearth.org",
    tags: ['climate', 'cities', 'data-visualization', 'product-design'],
    outcomes: [
      "Reduced GHG inventory creation time from months to seconds",
      "50+ cities across Latin America using the platform",
      "Open-source tool enabling global climate action"
    ]
  },
  {
    id: '2',
    slug: 'climate-ai-tools',
    title: "Climate AI Tools Suite",
    year: "2025",
    type: "ai-tools",
    organization: "Open Earth Foundation",
    role: "Head of Impact",
    description: "Five AI-powered tools that combine climate data with machine learning to help cities prioritize climate actions, assess risks, and generate comprehensive climate profiles.",
    longDescription: "In 2025, I launched five AI-powered tools that demonstrate how artificial intelligence can accelerate climate action when properly integrated with domain expertise and user-centered design.\n\nThese tools represent a new approach to climate governance: using AI not as a replacement for human judgment, but as a way to surface insights from complex datasets and reduce friction in decision-making processes.\n\nKey innovations:\n- GHG inventory generators that convert raw municipal data into standardized reports\n- Action ranking models that help cities prioritize interventions based on impact potential\n- Risk assessment tools that combine climate projections with local vulnerability data\n- City climate profile generators that create comprehensive overviews from multiple data sources\n- Meeting optimization tools that use calendar data and LLMs to improve collaboration\n\nEach tool was built using Replit for rapid prototyping and deployment, allowing for fast iteration and real-world testing with partner cities.",
    duration: "6 months",
    impact: "5 tools launched publicly",
    technologies: ['AI/ML', 'Replit', 'Climate Data APIs', 'Python', 'LLMs'],
    projectUrl: null,
    tags: ['ai', 'climate', 'data-science', 'rapid-prototyping'],
    outcomes: [
      "5 AI tools launched in 6 months",
      "Direct integration with city planning workflows",
      "AI integration methodology for climate governance"
    ]
  },
  {
    id: '3',
    slug: 'redisenar-community',
    title: "Rediseñar: Design Community & Publication",
    year: "2024-Present",
    type: "community",
    organization: "Independent",
    role: "Founder & Editor",
    description: "A growing community and publication exploring how everything is designed and how we can design it better. Connects designers, technologists, and citizens who want to challenge how the world works.",
    longDescription: "Rediseñar emerged from a simple observation: everything around us is designed, from the systems that govern our cities to the interfaces we use daily. Yet we rarely question these designs or imagine alternatives.\n\nWhat started as a personal exploration became a community of over 600 people who share a belief that design is political, that technology is not neutral, and that we can shape better futures through intentional creation.\n\nThe publication covers:\n- How design shapes consumption patterns and behavior\n- The intersection of technology, design, and climate action\n- Critical analysis of digital products and their social impact\n- Case studies of design interventions that created positive change\n- Community-driven projects and collaborative experiments\n\nBeyond writing, Rediseñar organizes meetups, workshops, and creative interventions in Córdoba, Argentina. It's not just a side project—it's part of the same mission to use design as a tool for positive transformation.",
    duration: "1+ year",
    impact: "600+ community members",
    technologies: ['Community Building', 'Content Strategy', 'Event Organization'],
    projectUrl: "https://redisenar.substack.com",
    tags: ['community', 'design-thinking', 'climate', 'social-impact'],
    outcomes: [
      "600+ followers organically",
      "80+ newsletter subscribers organically",
      "Regular meetups and interventions in Córdoba",
      "Platform for design discourse and climate action"
    ]
  },
  {
    id: '4',
    slug: 'climate-action-tools',
    title: "Climate Action Prioritization Tools",
    year: "2022-2024",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Design Lead",
    description: "Design and development of tools that help cities prioritize climate actions and assess risks, serving over 50 cities across Latin America with data-driven climate governance solutions.",
    longDescription: "Beyond inventory creation, cities need to act. But with limited resources and countless possible interventions, how do you choose where to focus?\n\nI led the design of tools that help city governments move from data to action. These platforms combine quantitative impact modeling with qualitative local knowledge to help cities make informed decisions about climate interventions.\n\nThe challenge was creating interfaces that could handle complex, multi-criteria decision-making while remaining accessible to busy government officials who often lack technical training.\n\nKey features:\n- Interactive action comparison tools that weigh cost, impact, and feasibility\n- Risk assessment interfaces that visualize climate vulnerabilities across city systems\n- Collaborative planning tools that enable stakeholder input and consensus building\n- Integration with existing city planning workflows and data systems\n\nThese tools now support climate planning processes in over 50 cities, helping translate global climate commitments into local action plans.",
    duration: "2+ years",
    impact: "50+ cities using tools",
    technologies: ['React', 'Data Visualization', 'GIS', 'API Integration'],
    projectUrl: null,
    tags: ['climate', 'decision-support', 'data-visualization', 'government-tech'],
    outcomes: [
      "Tools integrated into city planning workflows",
      "50+ cities using prioritization and risk tools",
      "Improved quality of climate action plans",
      "Faster decision-making processes for climate interventions"
    ]
  },
  {
    id: '5',
    slug: 'design-education',
    title: "Design & Technology Education",
    year: "2015-Present",
    type: "product-design",
    organization: "Various Institutions",
    role: "Mentor & Educator",
    description: "Over 1,000 students mentored in design and technology through workshops, courses, and one-on-one guidance, focusing on practical skills that bridge design thinking and technical implementation.",
    longDescription: "Teaching has always been central to my practice. Over the past decade, I've had the privilege of working with over 1,000 students across different contexts—from university courses to community workshops to individual mentoring sessions.\n\nMy approach to design education emphasizes the connection between thinking and making. I believe designers should understand the materials they work with, whether that's code, data, or policy frameworks.\n\nKey areas of focus:\n- Product design fundamentals with real-world project applications\n- Introduction to coding for designers (HTML, CSS, basic JavaScript)\n- Design thinking methodologies applied to social and environmental challenges\n- Career guidance for designers entering tech and climate sectors\n- Workshop facilitation and community building skills\n\nMany of my former students now work at leading design studios, tech companies, and climate organizations. Some have started their own design practices or joined social impact initiatives.\n\nWhat I learn from teaching often feeds back into my own work—students ask questions that challenge assumptions and push me to articulate why certain design decisions matter.",
    duration: "10+ years",
    impact: "1,000+ students mentored",
    technologies: ['Design Education', 'Workshop Facilitation', 'Curriculum Development'],
    projectUrl: null,
    tags: ['education', 'mentorship', 'design-thinking', 'career-development'],
    outcomes: [
      "1,000+ students mentored across different programs",
      "High placement rate of students in design and tech roles",
      "Development of practical, hands-on design curricula",
      "Strong alumni network in design and climate sectors"
    ]
  }
];

// Get all projects
export function getProjects(): Project[] {
  return projects;
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Get all project slugs (useful for static generation)
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}

// Get projects by type
export function getProjectsByType(type: Project['type']): Project[] {
  return projects.filter(project => project.type === type);
}
