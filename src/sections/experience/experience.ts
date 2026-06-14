import netcompanyLogo from '@/assets/netcompany.png'
import regalisLogo from '@/assets/regalis.png'
import type { ExperienceEntry } from './ExperienceEntry'

export interface ExperienceModel {
  sectionId?: string
  sectionLabel?: string
  headlineLead?: string
  headlineAccent?: string
  headlineTrail?: string
  meta?: string
  entries?: readonly ExperienceEntry[]
}

export const experience: ExperienceModel = {
  sectionId: 'experience',
  sectionLabel: 'Experience',
  headlineLead: "Where I've been ",
  headlineAccent: 'building things.',
  headlineTrail: '',
  meta: '2 roles · 2023 — present',
  entries: [
    {
      id: 'netcompany',
      role: 'Consultant',
      company: 'Netcompany',
      logo: netcompanyLogo,
      dateRange: '07.2024 — Present',
      duration: 'Full-time',
      isCurrent: true,
      description:
        'Delivering enterprise software for international clients as part of cross-functional ' +
        'team. Working across the stack — frontend in Vue, backend C# and .NET framework',
      highlights: [
        'Developed and maintained frontend (Vue.js, TypeScript) and backend (C#, .NET) features for an eCommerce platform',
        'Authored technical documentation and provided effort estimations for planning',
        'Engaged directly with clients on-site to gather requirements and present delivered features',
        'Contributed to code reviews and pull requests to uphold code quality',
      ],
      stack: [
        'Vue.js',
        'TypeScript',
        'Tailwind.css',
        'C#',
        '.NET',
        'Episerver',
        'Git',
        'AzureDevops',
        'Microsoft Dynamics CRM',
      ],
    },
    {
      id: 'regalis',
      role: 'System Administrator - Intern',
      company: 'Regalis Technologies',
      logo: regalisLogo,
      dateRange: '07.2023',
      duration: '1 month · Internship',
      description:
        'A short, hands-on summer internship in IT infrastructure. First professional exposure ' +
        'to running real systems, day-to-day administration.',
      highlights: [
        'Installed, configured, and maintained Linux operating systems on physical and virtual machines',
        'Developed and modified internal tools using C++',
        'Got my first taste of working inside an engineering organization.',
      ],
      stack: ['C++', 'Linux - Debian and Arch', 'Vim'],
    },
  ],
}
