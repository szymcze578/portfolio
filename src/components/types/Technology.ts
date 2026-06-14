export interface ProjectLink {
  readonly label: string
  readonly href: string
  readonly meta?: string
}

export interface Technology {
  readonly id: string
  readonly index: string
  readonly role: string
  readonly name: string
  readonly description: string
  readonly level?: number
  readonly levelLabel?: string
  readonly stack: readonly string[]
  readonly projects: readonly ProjectLink[]
}
