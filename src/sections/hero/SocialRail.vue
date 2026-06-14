<template>
  <aside class="flex sm:flex-col items-center gap-2 sm:gap-5.5 text-(--muted)">
    <a
      v-for="s in model.socials"
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
import type { Socials } from './socials'

const { model } = defineProps<{ model: Socials }>()
</script>
