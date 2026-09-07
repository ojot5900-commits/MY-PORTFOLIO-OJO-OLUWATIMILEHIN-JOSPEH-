import heroPortraitImg from './assets/images/hero_cinematic_portrait_1788788642249.jpg';
import projectPufferImg from './assets/images/project_puffer_jacket_1788788664125.jpg';
import projectHeadphonesImg from './assets/images/project_headphones_1788788681324.jpg';
import projectCosmeticImg from './assets/images/project_cosmetic_bottle_1788788702826.jpg';
import { ClientLogo, NavItem, ProjectItem, ServiceItem } from './types';

export const HERO_IMAGE = heroPortraitImg;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

export const SERVICES: ServiceItem[] = [
  { number: '#01', title: 'Brand Strategy' },
  { number: '#02', title: 'Brand Identity Design' },
  { number: '#03', title: 'Packaging Design' },
  { number: '#04', title: 'Creative Direction' },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: 'supa', name: 'Supa Blox', type: 'circle' },
  { id: 'hype', name: 'Hype Blox', type: 'hourglass' },
  { id: 'frame', name: 'Frame Blox', type: 'moon' },
  { id: 'ultra', name: 'Ultra Blox', type: 'capsule' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-01',
    number: '01',
    title: 'AERO // Quilted Shell',
    category: 'Product & Fashion Direction',
    image: projectPufferImg,
    alt: 'Black puffer jacket suspended from a thin industrial wire against a light neutral background',
    description: 'Sculptural exploration of modular outerwear suspended in zero-tension studio wire.',
    year: '2025',
  },
  {
    id: 'project-02',
    number: '02',
    title: 'SONIC // Acoustic Identity',
    category: 'Spatial Audio Hardware',
    image: projectHeadphonesImg,
    alt: 'Dramatic black-and-white portrait of a person wearing large over-ear headphones, facing sideways',
    description: 'High-contrast monochrome editorial campaign for acoustic over-ear audio architecture.',
    year: '2024',
  },
  {
    id: 'project-03',
    number: '03',
    title: 'LUMEN // Mineral Extract',
    category: 'Packaging & Form Factor',
    image: projectCosmeticImg,
    alt: 'Minimalist black cosmetic/product bottle standing on sculptural rocks against a light neutral background',
    description: 'Monolithic glass serum container anchored upon raw basalt rock formations.',
    year: '2024',
  },
];
