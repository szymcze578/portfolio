<template>
  <article
    class="tech-row group relative grid items-start py-14 sm:py-18 gap-6 sm:gap-10 lg:gap-16 grid-cols-1 sm:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] border-t border-(--line) last-of-type:border-b last-of-type:border-(--line)"
    :data-t="tech.id"
  >
    <header
      class="flex flex-row sm:flex-col flex-wrap items-center sm:items-start gap-y-3 gap-x-4 sm:gap-y-4.5"
    >
      <span class="text-[12px] uppercase tracking-[0.18em] text-(--muted) basis-full sm:basis-auto">
        {{ tech.index }}
      </span>

      <div
        class="tech-logo grid place-items-center bg-(--accent-soft) w-16 h-16 rounded-[14px] sm:w-22 sm:h-22 sm:rounded-[18px]"
      >
        <component :is="tech.icon" v-if="tech.icon" />
      </div>

      <div class="flex flex-col gap-0.5">
        <span class="text-[11.5px] font-medium uppercase tracking-[0.14em] text-(--accent-ink)">
          {{ tech.role }}
        </span>
        <span
          class="font-medium leading-none tracking-[-0.02em] text-(--ink) text-[28px] sm:text-[32px] lg:text-[40px]"
        >
          {{ tech.name }}
        </span>
      </div>
    </header>
    <div class="flex flex-col gap-5.5 min-w-0">
      <p class="m-0 max-w-[60ch] text-[18px] leading-[1.6] text-(--ink-soft)">
        {{ tech.description }}
      </p>

      <div
        class="mt-1.5 pt-5.5 border-t border-dashed border-(--line) grid gap-5.5 lg:gap-8 grid-cols-1 lg:grid-cols-2"
      >
        <section>
          <p class="m-0 mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-(--muted)">
            Stack
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="item in tech.stack"
              :key="item"
              class="text-[11px] px-2.5 py-1.25 rounded-full border border-(--line) text-(--ink-soft) bg-(--bg)"
            >
              {{ item }}
            </span>
          </div>
        </section>

        <section>
          <p class="m-0 mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-(--muted)">
            Selected projects
          </p>
          <div class="flex flex-col gap-0.5">
            <ProjectLink v-for="project in tech.projects" :key="project.label" v-bind="project" />
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Technology } from './Technology'
import ProjectLink from './ProjectLink.vue'

defineProps<{ tech: Technology }>()
</script>

<style scoped>
/*
 * The accent stripe in the left gutter — Tailwind can't easily target a
 * single ::before with negative offsets that survive the responsive grid,
 * so this lives in scoped CSS. Inherits the active palette via --accent.
 */
.tech-row::before {
  content: '';
  position: absolute;
  top: 1.5rem;
  bottom: 1.5rem;
  left: -1.5rem;
  width: 0;
  border-radius: 3px;
  background: var(--accent);
  transition: width 320ms cubic-bezier(0.2, 0.7, 0.2, 1);
}
.tech-row:hover::before {
  width: 3px;
}

.tech-logo :deep(svg) {
  width: 38px;
  height: 38px;
}
@media (min-width: 640px) {
  .tech-logo :deep(svg) {
    width: 52px;
    height: 52px;
  }
}
</style>
