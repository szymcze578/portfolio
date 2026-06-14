import type { Technology } from './Technology'
import VueIcon from '@/components/icons/VueIcon.vue'
import JavaIcon from '@/components/icons/JavaIcon.vue'

export interface TechnologiesModel {
  sectionId?: string
  sectionLabel?: string
  headlineLead?: string
  headlineAccent?: string
  headlineTrail?: string
  meta?: string
  technologies?: Technology[]
  alsoFluentWith?: string[]
}

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
      icon: VueIcon,
      index: 'Frontend',
      role: 'Frontend framework',
      name: 'Vue.js',
      description:
        "Composition API, Pinia, Vue Router and Nuxt. I love Vue's clarity — single-file " +
        'components keep teams moving fast without ceremony, and the reactive model makes ' +
        'complex UI flows easy to reason about.',
      stack: ['Vue 3', 'Nuxt', 'Pinia', 'Vite', 'TypeScript'],
      projects: [
        {
          label: 'Geodimetr Website',
          href: 'https://github.com/szymcze578/New-Frontend-Vue.js---page-for-Surveyor-company',
          meta: 'Deployed',
        },
      ],
    },
    {
      id: 'java',
      icon: JavaIcon,
      index: 'Backend',
      role: 'Backend platform',
      name: 'Java',
      description:
        'Spring Boot services, REST, JPA. Battle-tested, ' +
        'well-tested, and ready for production traffic. I enjoy designing clean domain ' +
        'models and keeping infrastructure boring — in the best way.',
      stack: ['Java 21', 'Spring Boot', 'JPA', 'PostgreSQL', 'Kafka'],
      projects: [
        {
          label: 'Sales Handling App',
          href: 'https://github.com/szymcze578/SalesHandlingApp-MobileApplication-EngineeringThesis',
          meta: 'Enginnering Thesis',
        },
        {
          label: 'Library Microservices',
          href: 'https://github.com/szymcze578/library-app-microservice',
          meta: 'In Progress',
        },
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
