export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  number: string;
  title: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  type: 'circle' | 'hourglass' | 'moon' | 'capsule';
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  description: string;
  year: string;
}
