export function generateColor(random: boolean): string {
  if (!random) return '';

  const colors = [
    'rgb(181, 23, 158)',
    'rgb(42, 157, 143)',
    'rgb(81, 150, 187)',
    'rgb(2, 119, 181)',
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export type KnowledgeBadge = {
  field: string;
  skills: {
    label: string;
    borderColor: string;
  }[];
};

export const KNOWLEDGE_BADGES: KnowledgeBadge[] = [
  {
    field: 'Frontend',
    skills: [
      {
        label: 'HTML5',
        borderColor: generateColor(false),
      },
      {
        label: 'CSS3',
        borderColor: generateColor(false),
      },
      {
        label: 'JavaScript',
        borderColor: generateColor(false),
      },
      {
        label: 'Typescript',
        borderColor: generateColor(true),
      },
      {
        label: 'Bootstrap',
        borderColor: generateColor(false),
      },
      {
        label: 'Tailwind',
        borderColor: generateColor(false),
      },
      {
        label: 'Angular',
        borderColor: generateColor(true),
      },
      {
        label: 'ReactJS',
        borderColor: generateColor(true),
      },
      {
        label: 'NextJS',
        borderColor: generateColor(true),
      },
      {
        label: 'Shadcn',
        borderColor: generateColor(false),
      },
      {
        label: 'Angular Material',
        borderColor: generateColor(false),
      },
      {
        label: 'RxJS',
        borderColor: generateColor(false),
      },
      {
        label: 'NgRx',
        borderColor: generateColor(false),
      },
      {
        label: 'Redux',
        borderColor: generateColor(false),
      },
    ],
  },
  {
    field: 'Backend',
    skills: [
      {
        label: 'NodeJS',
        borderColor: generateColor(true),
      },
      {
        label: 'ExpressJS',
        borderColor: generateColor(false),
      },
      {
        label: 'Dot Net core',
        borderColor: generateColor(true),
      },
      {
        label: 'Next Auth',
        borderColor: generateColor(false),
      },
      {
        label: 'JWT Auth',
        borderColor: generateColor(false),
      },
      {
        label: "Rest API's",
        borderColor: generateColor(false),
      },
      {
        label: 'Graph QL',
        borderColor: generateColor(false),
      },
      {
        label: 'Web Sockets',
        borderColor: generateColor(false),
      },
      {
        label: 'Microservices',
        borderColor: generateColor(true),
      },
    ],
  },
  {
    field: 'Database',
    skills: [
      {
        label: 'MS SQL Server',
        borderColor: generateColor(true),
      },
      {
        label: 'MySQL',
        borderColor: generateColor(true),
      },
      {
        label: 'PostgreSQL',
        borderColor: generateColor(true),
      },
      {
        label: 'MangoDB',
        borderColor: generateColor(false),
      },
      {
        label: 'Mangoos',
        borderColor: generateColor(false),
      },
      {
        label: 'DynamoDB',
        borderColor: generateColor(false),
      },
    ],
  },
  {
    field: 'DevOps',
    skills: [
      {
        label: 'Git / GitHub',
        borderColor: generateColor(false),
      },
      {
        label: 'GitHub Actions',
        borderColor: generateColor(false),
      },
      {
        label: 'Docker',
        borderColor: generateColor(true),
      },
      {
        label: 'Jenkins',
        borderColor: generateColor(true),
      },
      {
        label: 'Azure',
        borderColor: generateColor(true),
      },
      {
        label: 'Terraform',
        borderColor: generateColor(true),
      },
      {
        label: 'Kubernetes',
        borderColor: generateColor(true),
      },
      {
        label: 'JUnit',
        borderColor: generateColor(false),
      },
      {
        label: 'Sonarqube',
        borderColor: generateColor(false),
      },
      {
        label: 'JFrog',
        borderColor: generateColor(false),
      },
      {
        label: 'Maven',
        borderColor: generateColor(false),
      },
      {
        label: 'Grafana',
        borderColor: generateColor(false),
      },
      {
        label: 'Splunk',
        borderColor: generateColor(false),
      },
    ],
  },
];
