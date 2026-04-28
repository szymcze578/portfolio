<template>
  <aside
    class="flex flex-row sm:flex-col items-center gap-2 sm:gap-5.5 text-(--muted)"
    aria-label="Social"
  >
    <a
      v-for="s in socials"
      :key="s.kind"
      :href="s.href"
      :aria-label="s.label"
      target="_blank"
      rel="noopener noreferrer"
      class="grid place-items-center w-9 h-9 rounded-[10px] transition-[color,background-color,transform] duration-150 hover:text-(--accent-ink) hover:bg-(--accent-soft) hover:-translate-y-0.5"
    >
      <component :is="s.icon" />
    </a>
    <span class="hidden sm:block w-px h-15 bg-(--line)" aria-hidden="true"></span>
  </aside>
</template>

<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import MailIcon from './icons/MailIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'

const socials = [
  { kind: 'github', href: 'https://github.com/szymcze578', label: 'GitHub', icon: GithubIcon },
  {
    kind: 'linkedin',
    href: 'https://www.linkedin.com/in/szymon-czech-0b59a82b7/',
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
  { kind: 'x', href: 'https://x.com/eXizt1337', label: 'X', icon: TwitterIcon },
  { kind: 'email', href: 'mailto:szymonpoczta@interia.pl', label: 'Email', icon: MailIcon },
]
</script>
