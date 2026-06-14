export interface ExperienceEntry {
  readonly id: string
  readonly role: string
  readonly company: string
  readonly logo?: string
  readonly logoAlt?: string
  readonly dateRange: string
  readonly duration?: string
  readonly isCurrent?: boolean
  readonly description: string
  readonly highlights: readonly string[]
  readonly stack: readonly string[]
}
