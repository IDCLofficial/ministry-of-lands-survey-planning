export interface NavLink {
  href: string;
  label: string;
} 

export const NAV_LINKS: NavLink[] = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/about",
    label: "About Us"
  },
  {
    href: "/department",
    label: "Departments & Agencies"
  },
  {
    href: "/services",
    label: "Services"
  },
  {
    href: "/projects",
    label: "Projects"
  },
  {
    href: "/news",
    label: "News"
  },
  {
    href: "/events",
    label: "Events"
  },
  {
    href: "/media",
    label: "Media"
  },
  {
    href: "/contact",
    label: "Contact Us"
  }
];

export const CONTACT_INFO = {
  address: "Block 7, Imo State Secretariat, Port Harcourt Road, PMB 1532, Owerri, Imo State, Nigeria",
  email: "info@landsurvey.im.gov",
  phone: "+234 803 506 6722",
};
