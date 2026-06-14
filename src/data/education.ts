import type { EducationModel } from '@/components/types/PropsModels'
import uekLogo from '@/assets/uek.png'
import plslLogo from '@/assets/plsl.png'

export const education: EducationModel = {
  sectionId: 'education',
  label: 'Education',
  heading: "Where I'm",
  headingAccent: 'learning the craft.',
  meta: '2 degrees · 2020 — present',
  items: [
    {
      date: '10.2025 — Present',
      badge: 'Current',
      current: true,
      school: 'Krakow University of Economics',
      schoolNative: 'Uniwersytet Ekonomiczny w Krakowie',
      field: 'Applied Computer Science',
      titleMain: 'Master',
      titleNative: '(Magister)',
      logo: uekLogo,
      abbr: 'UEK',
    },
    {
      date: '10.2020 — 01.2024',
      badge: 'Completed',
      current: false,
      school: 'Silesian University of Technology',
      schoolNative: 'Politechnika Śląska',
      field: 'Informatics — computer graphics and software',
      titleMain: 'Bachelor of Engineering',
      titleNative: '(Inżynier)',
      logo: plslLogo,
      abbr: 'PŚ',
    },
  ],
}
