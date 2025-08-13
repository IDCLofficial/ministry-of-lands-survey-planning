export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  height?: 'small' | 'medium' | 'large' | 'extra-large';
  alignment?: 'left' | 'center';
  overlay?: boolean;
  className?: string;
}
 
export const HERO_CONFIGS = {
  HOME: {
    title: "Transforming Land Administration in Imo State",
    subtitle: "Transparency. Efficiency. Digital Innovation.",
    description: "The Ministry of Lands, Survey, Housing and Urban Planning is committed to modernizing land administration, ensuring secure land tenure, and promoting sustainable urban development across Imo State.",
    height: 'extra-large' as const,
    alignment: 'left' as const
  },

  DEPARTMENT: {
    title: "Ministry of Lands, Survey, Housing and Urban Planning",
    subtitle: "Departments & Agencies",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  PROJECTS: {
    title: "Our Development Initiatives",
    description: "Explore our ongoing and completed projects in land administration, urban development, and housing initiatives that are transforming communities across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  TEAM: {
    title: "Our Leadership Team",
    description: "Meet Chief Barr. Enyinna Victor Onuegbu, KSC, Honourable Commissioner for Lands, Survey and Physical Planning, and the dedicated team committed to transforming land administration in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
    className: "py-16 md:py-24"
  },
  
  SERVICES: {
    title: "Our Services",
    description: "The Ministry of Lands, Survey, Housing and Urban Planning offers comprehensive land administration services, including C of O issuance, land allocation, survey services, urban planning, and development control to support sustainable growth in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const,
  },
  
  NEWS: {
    title: "News & Announcements",
    description: "Stay updated with the latest news, press releases, and public notices from the Ministry of Lands, Survey, Housing and Urban Planning.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  MEDIA: {
    title: "Media Gallery & Success Stories",
    description: "Explore our visual documentation of land administration projects, urban development initiatives, and success stories from across Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  EVENTS: {
    title: "Public Engagements & Programs",
    description: "Stay informed about upcoming public hearings, stakeholder meetings, and community engagement programs related to land administration and urban planning in Imo State.",
    height: 'medium' as const,
    alignment: 'left' as const
  },
  
  ABOUT: {
    title: "About the Ministry of Lands, Survey, Housing and Urban Planning",
    description: "The statutory organ of government responsible for land administration, urban spatial planning, and housing policy development across Imo State, ensuring transparent and efficient land management systems.",
    height: 'medium' as const,
    alignment: 'left' as const
  }
} as const;
