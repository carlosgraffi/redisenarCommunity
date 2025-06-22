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
    title: "CityCatalyst: Building Climate Tools That Actually Get Used",
    year: "2022-2024",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Design Lead",
    description: "An open-source platform that helps cities generate GHG inventories, assess climate risks, and prioritize actions. Reduced inventory drafting time from 6-12 months to under 10 minutes.",
    longDescription: "Cities are required to track their greenhouse gas emissions, assess climate risks, and build action plans. But most don't have the staff, time, or tools to get it done. The process is slow, manual, and filled with friction — often taking over a year for a single inventory.\n\nCityCatalyst is an open-source platform that helps cities generate a GHG inventory, assess climate risks, and prioritize actions — all in one place. It's built around speed, usability, and integration with trusted datasets.\n\nI led the design of the entire ecosystem, from sketch to production. I worked closely with environmental data scientists to turn international frameworks into guided workflows. I used Replit and Figma to prototype early tools, tested them directly with city users in Brazil and Argentina, and iterated based on their feedback.\n\nI also helped shape the overall architecture, pushing for modularity so tools like the GHG inventory and the risk assessment could work together or separately. The UX is designed to feel like a conversation, not a form.",
    duration: "2+ years",
    impact: "50+ Brazilian cities",
    technologies: ['React', 'TypeScript', 'Data Visualization', 'Replit', 'Figma'],
    projectUrl: "https://citycatalyst.openearth.org",
    tags: ['climate', 'cities', 'data-visualization', 'product-design'],
    outcomes: [
      "Piloted in 50+ Brazilian cities in 2024",
      "Reduced GHG inventory drafting time from 6–12 months to under 10 minutes",
      "Used by consultants and local governments without prior training",
      "Supported national reporting to GCoM and UNFCCC",
      "Became the foundation for a broader climate planning suite"
    ]
  },
  {
    id: '2',
    slug: 'high-impact-actions-prioritizer',
    title: "High-Impact Actions Prioritizer: Turning Plans into What Actually Matters",
    year: "2023-2024",
    type: "ai-tools",
    organization: "Open Earth Foundation",
    role: "Product Designer",
    description: "A lightweight tool that ranks climate actions based on their potential impact using expert scoring, local conditions, and AI reasoning to help cities prioritize effectively.",
    longDescription: "Cities often have dozens of potential climate actions, but lack a way to prioritize them. They don't know which will reduce the most emissions or improve resilience in the most effective way.\n\nThis lightweight tool ranks climate actions based on their potential impact — using a mix of expert scoring, local conditions, and AI reasoning.\n\nWe started by reviewing action libraries from C40, CDP, and national plans. I mapped common decision factors and user behaviors, then prototyped a ranking experience that feels more like a prioritization workshop than a spreadsheet.\n\nI integrated an LLM to help cities generate custom scenarios or justify choices. I designed the interface to be modular and explainable — so users could tweak assumptions and immediately see how the ranking changed.",
    duration: "1 year",
    impact: "20+ city action plans",
    technologies: ['AI/ML', 'LLMs', 'React', 'Data Analysis'],
    projectUrl: null,
    tags: ['ai', 'climate', 'decision-support', 'prioritization'],
    outcomes: [
      "Launched as an optional module in the CityCatalyst suite",
      "Enabled cities to compare mitigation vs. adaptation trade-offs",
      "Helped generate 20+ city-specific action plans in early pilots",
      "Cut planning time by weeks and improved cross-team decision-making"
    ]
  },
  {
    id: '3',
    slug: 'rapid-climate-risk-assessment',
    title: "Rapid Climate Risk Assessment: A Faster Way to Understand What's Coming",
    year: "2023-2024",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Designer",
    description: "A web-based tool that generates first-pass risk profiles for cities in under 5 minutes, combining local data, future scenarios, and expert frameworks through a simple interface.",
    longDescription: "Cities are expected to assess their future climate risks, but existing tools are either too generic or too technical. Many cities skip the process entirely or produce something too shallow to inform decisions.\n\nThis web-based tool generates a first-pass risk profile for a city, combining local data, future scenarios, and expert frameworks — all accessible through a simple interface.\n\nI worked with climate scientists to define a scoring model that balanced hazard exposure, vulnerability, and resilience. I designed a table and radar-based view that gave both high-level and detailed insights.\n\nI introduced a way to toggle between present, optimistic, and pessimistic futures. I led user testing in three countries to validate terminology and flow. All data is structured to match national and international reporting requirements.",
    duration: "1 year",
    impact: "Multi-country deployment",
    technologies: ['Data Visualization', 'Climate Science APIs', 'React', 'GIS'],
    projectUrl: null,
    tags: ['climate', 'risk-assessment', 'data-visualization', 'government-tech'],
    outcomes: [
      "Risk profiles generated in under 5 minutes",
      "Used by non-technical staff in cities with no prior adaptation planning",
      "Now used as a base input for prioritizing climate actions",
      "Informs grant applications and national adaptation strategies"
    ]
  },
  {
    id: '4',
    slug: 'redisenar-community',
    title: "Rediseñar: A Community to Rethink How We Design Everything",
    year: "2024-Present",
    type: "community",
    organization: "Independent",
    role: "Founder & Editor",
    description: "A platform and community exploring how we can redesign systems, habits, and imaginaries for a livable future. Raw, simple, and provocative climate communications.",
    longDescription: "Design conversations are often disconnected from climate reality. There's little space to question how products, services, and narratives are shaping a planet in crisis.\n\nI created Rediseñar, a platform and community to explore how we can redesign systems, habits, and imaginaries for a livable future.\n\nI started by writing longform essays blending design, environment, and culture — shared via Substack and Instagram. I organized informal meetups in Córdoba and distributed posters and stickers with climate messages.\n\nI kept it small but consistent, focusing on resonance over reach. I rejected the polished, brand-driven style of most climate comms in favor of something raw, simple, and provocative.",
    duration: "1+ year",
    impact: "600+ community members",
    technologies: ['Community Building', 'Content Strategy', 'Social Media'],
    projectUrl: "https://redisenar.substack.com",
    tags: ['community', 'design-thinking', 'climate', 'social-impact'],
    outcomes: [
      "607 Instagram followers, 86 Substack subscribers (first 3 months)",
      "One essay featured in a climate storytelling workshop",
      "Used in education settings by teachers and environmental educators",
      "Became a vehicle to test new ideas and formats beyond client work"
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