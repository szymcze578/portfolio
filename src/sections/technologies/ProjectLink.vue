<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    class="project-link flex items-center justify-between gap-4 py-2.5 font-medium text-(--ink) no-underline border-b border-(--line) last:border-b-0 transition-[color,padding] duration-200 hover:text-(--accent-ink) hover:pl-1.5"
  >
    <span>{{ label }}</span>
    <span
      v-if="meta"
      class="shrink-0 text-[11.5px] font-normal uppercase tracking-[0.04em] text-(--muted)"
    >
      {{ meta }}
    </span>
    <span class="arrow text-(--accent-ink) transition-transform duration-200" aria-hidden="true">→</span>
  </a>
</template>

<script setup lang="ts">
import type { ProjectLink } from './Technology'

defineProps<ProjectLink>()
</script>

<style scoped>
.project-link:hover .arrow {
  transform: translateX(4px);
}
</style>
