import type { EducationItem } from './EducationItem'
import type { ExperienceEntry } from './ExperienceEntry'
import type { Technology } from './Technology'

export interface ExperienceModel {
  sectionId?: string
  sectionLabel?: string
  headlineLead?: string
  headlineAccent?: string
  headlineTrail?: string
  meta?: string
  entries?: readonly ExperienceEntry[]
}

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

export interface EducationModel {
  sectionId?: string
  label?: string
  heading?: string
  headingAccent?: string
  meta?: string
  items?: readonly EducationItem[]
}
