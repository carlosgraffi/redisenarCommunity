
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
    longDescription: "In 2025, I launched five public tools that integrate AI workflows with climate data, designed to make climate governance more accessible and actionable.\n\nEach tool addresses a specific need in climate action planning:\n- GHG inventory generators that automate data collection and calculation\n- Action ranking models that help cities prioritize interventions based on impact and feasibility\n- Risk assessment tools that identify climate vulnerabilities\n- City climate profile generators that create comprehensive overviews\n- Meeting optimization tools using calendar data and LLMs\n\nDesign approach:\n- Treated AI as a collaborative partner, not magic\n- Designed interactions that stay grounded in user intent\n- Created interfaces that make complex algorithms understandable\n- Ensured outputs remained actionable for climate governance contexts\n- Built rapid prototyping workflows using Replit for fast iteration\n\nThese tools demonstrate how AI can amplify human decision-making in climate action without replacing the critical thinking needed for effective governance.",
    duration: "6 months",
    impact: "5 public tools launched",
    technologies: ['AI/LLM Integration', 'Replit', 'Climate Data APIs', 'Rapid Prototyping'],
    projectUrl: "https://openearth.org",
    tags: ['ai', 'climate', 'tools', 'prototyping'],
    outcomes: [
      "5 AI-powered climate tools launched in 6 months",
      "Rapid prototyping workflow established",
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
    longDescription: "Rediseñar started as an exploration of how design shapes everything around us—from waste systems to narratives, from digital products to policy. It's grown into a community platform that challenges conventional thinking about design's role in society.\n\nThe project combines:\n- A newsletter publication with essays about design's impact on consumption, silence, and action\n- Community meetups and creative interventions in Córdoba, Argentina\n- A platform for connecting designers, technologists, and citizens\n- Educational content about design thinking and climate action\n\nDesign philosophy:\n- Everything is designed, so everything can be redesigned\n- Design should create space for new solutions, not just optimize existing ones\n- Community building through shared exploration and experimentation\n- Open dialogue about design's responsibility in addressing global challenges\n\nThe community grew organically to over 600 followers and 80+ newsletter subscribers in its first months, demonstrating hunger for design discourse that goes beyond aesthetics to address systemic challenges.",
    duration: "Ongoing since 2024",
    impact: "600+ followers, 80+ subscribers",
    technologies: ['Community Building', 'Content Strategy', 'Newsletter Platform', 'Event Organization'],
    projectUrl: "https://redisenar.substack.com",
    tags: ['community', 'publication', 'design-thinking', 'climate'],
    outcomes: [
      "600+ community members in first months",
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
    description: "Design and development of tools that help cities prioritize climate actions and assess risks, serving over 50 cities across Latin America with data-driven climate governance.",
    longDescription: "Beyond greenhouse gas inventories, cities need to prioritize which climate actions to implement first. I designed a suite of tools that help city governments make these critical decisions based on data, local context, and available resources.\n\nKey challenges addressed:\n- Translating complex climate science into actionable insights\n- Designing for diverse city contexts and resource constraints\n- Creating interfaces that build confidence in data-driven decisions\n- Balancing comprehensive analysis with usable simplicity\n\nThe tools include:\n- Risk assessment frameworks that identify climate vulnerabilities\n- Action prioritization matrices that consider impact, cost, and feasibility\n- Resource planning interfaces that help cities allocate limited budgets\n- Progress tracking dashboards that monitor implementation\n\nDesign process involved extensive collaboration with city governments, NGOs, and climate scientists to ensure the tools met real-world needs while remaining scientifically accurate.",
    duration: "2+ years",
    impact: "50+ cities across Latin America",
    technologies: ['Data Visualization', 'Decision Support Systems', 'Multi-stakeholder Design', 'Climate Science'],
    projectUrl: "https://openearth.org",
    tags: ['climate', 'cities', 'decision-support', 'collaboration'],
    outcomes: [
      "50+ cities using prioritization tools",
      "Improved climate action planning efficiency",
      "Data-driven decision making for climate governance",
      "Collaborative design methodology established"
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
