import type { TechnologiesModel } from '@/components/types/PropsModels'

export const technologies: TechnologiesModel = {
  sectionId: 'skills',
  sectionLabel: 'Toolbox',
  headlineLead: 'Technologies I reach for, ',
  headlineAccent: 'every day.',
  headlineTrail: '',
  meta: 'Frontend · Backend\nLast updated · 04.2026',
  technologies: [
    {
      id: 'vue',
      index: 'Frontend',
      role: 'Frontend framework',
      name: 'Vue.js',
      description:
        "Composition API, Pinia, Vue Router and Nuxt. I love Vue's clarity — single-file " +
        'components keep teams moving fast without ceremony, and the reactive model makes ' +
        'complex UI flows easy to reason about.',
      stack: ['Vue 3', 'Nuxt', 'Pinia', 'Vite', 'TypeScript'],
      projects: [
        { label: 'Project One', href: '#work', meta: 'Coming soon' },
        { label: 'Project Two', href: '#work', meta: 'Coming soon' },
        { label: 'Project Three', href: '#work', meta: 'Coming soon' },
      ],
    },
    {
      id: 'java',
      index: 'Backend',
      role: 'Backend platform',
      name: 'Java',
      description:
        'Spring Boot services, REST, JPA. Battle-tested, ' +
        'well-tested, and ready for production traffic. I enjoy designing clean domain ' +
        'models and keeping infrastructure boring — in the best way.',
      stack: ['Java 21', 'Spring Boot', 'JPA', 'PostgreSQL', 'Kafka'],
      projects: [
        { label: 'API Service', href: '#work', meta: 'Coming soon' },
        { label: 'Microservice', href: '#work', meta: 'Coming soon' },
        { label: 'Data Pipeline', href: '#work', meta: 'Coming soon' },
      ],
    },
  ],
  alsoFluentWith: [
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'GitHub Actions',
    'Tailwind CSS',
    'TypeScript',
    'Git',
    'REST',
  ],
}
