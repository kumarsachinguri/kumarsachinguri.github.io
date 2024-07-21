import { Project } from '../interfaces/project.model';

export const PROJECTS: Project[] = [
  {
    name: 'Amazon Clone',
    image: 'amazon-clone.jpeg',
    heading: 'Amazon Clone',
    skills: [
      'NodeJs',
      'Express',
      'Mongoose',
      'Next Auth',
      'Next.js 13',
      'React Hook Form',
      'Typescript',
      'Tailwind CSS',
    ],
    isLive: false,
  },
  {
    name: 'Discord Clone',
    image: 'discord-clone.jpeg',
    heading: 'Discord Clone',
    skills: [
      'Next.js 13',
      'React Hook Form',
      'Zustand',
      'Shadcn',
      'Typescript',
    ],
    isLive: false,
  },
  {
    name: 'Spotify Clone',
    image: 'spotify-clone.gif',
    heading: 'Spotify Clone',
    skills: [
      'Next.js 13',
      'React Hook Form',
      'Zustand',
      'Radix UI',
      'Typescript',
      'Tailwind CSS',
    ],
    isLive: false,
  },
  {
    name: 'Bala Ji Constructions',
    image: 'Balaji Constructions Banner.png',
    heading: 'Bala Ji Constructions',
    skills: ['React', 'Typescript', 'TailwindCSS', 'ShadcnUI'],
    isLive: true,
    link: 'https://balajiconstructions.org.in/',
  },
];
