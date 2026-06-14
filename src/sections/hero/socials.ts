import type { Component } from 'vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import MailIcon from '@/components/icons/MailIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'

export interface SocialItem {
  kind: string
  href: string
  label: string
  icon: Component
}

export interface Socials {
  socials: SocialItem[]
}

export const socials: Socials = {
  socials: [
    { kind: 'github', href: 'https://github.com/szymcze578', label: 'GitHub', icon: GithubIcon },
    {
      kind: 'linkedin',
      href: 'https://www.linkedin.com/in/szymon-czech-0b59a82b7/',
      label: 'LinkedIn',
      icon: LinkedinIcon,
    },
    { kind: 'x', href: 'https://x.com/eXizt1337', label: 'X', icon: TwitterIcon },
    { kind: 'email', href: 'mailto:szymonpoczta@interia.pl', label: 'Email', icon: MailIcon },
  ],
}
