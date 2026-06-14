<template>
  <article
    class="tech-row group relative grid items-start py-[56px] sm:py-[72px] gap-6 sm:gap-10 lg:gap-16 grid-cols-1 sm:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] border-t border-[var(--line)] last-of-type:border-b last-of-type:border-[var(--line)]"
    :data-t="tech.id"
  >
    <!-- LEFT · stamp -->
    <header
      class="flex flex-row sm:flex-col flex-wrap items-center sm:items-start gap-y-3 gap-x-4 sm:gap-y-[18px]"
    >
      <span
        class="text-[12px] uppercase tracking-[0.18em] text-[var(--muted)] basis-full sm:basis-auto"
      >
        {{ tech.index }}
      </span>

      <div
        class="tech-logo grid place-items-center bg-[var(--accent-soft)] w-16 h-16 rounded-[14px] sm:w-[88px] sm:h-[88px] sm:rounded-[18px]"
      >
        <slot name="logo" />
      </div>

      <div class="flex flex-col gap-0.5">
        <span
          class="text-[11.5px] font-medium uppercase tracking-[0.14em] text-[var(--accent-ink)]"
        >
          {{ tech.role }}
        </span>
        <span
          class="font-medium leading-none tracking-[-0.02em] text-[var(--ink)] text-[28px] sm:text-[32px] lg:text-[40px]"
        >
          {{ tech.name }}
        </span>
      </div>
    </header>

    <!-- RIGHT · body -->
    <div class="flex flex-col gap-[22px] min-w-0">
      <p class="m-0 max-w-[60ch] text-[18px] leading-[1.6] text-[var(--ink-soft)]">
        {{ tech.description }}
      </p>

      <div
        class="mt-1.5 pt-[22px] border-t border-dashed border-[var(--line)] grid gap-[22px] lg:gap-8 grid-cols-1 lg:grid-cols-2"
      >
        <section>
          <p
            class="m-0 mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
          >
            Stack
          </p>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="item in tech.stack"
              :key="item"
              class="text-[11px] px-2.5 py-[5px] rounded-full border border-[var(--line)] text-[var(--ink-soft)] bg-[var(--bg)]"
            >
              {{ item }}
            </span>
          </div>
        </section>

        <section>
          <p
            class="m-0 mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]"
          >
            Selected projects
          </p>
          <div class="flex flex-col gap-0.5">
            <a
              v-for="project in tech.projects"
              :key="project.label"
              :href="project.href"
              class="project-link flex items-center justify-between gap-4 py-2.5 font-medium text-[var(--ink)] no-underline border-b border-[var(--line)] last:border-b-0 transition-[color,padding] duration-200 hover:text-[var(--accent-ink)] hover:pl-1.5"
            >
              <span>{{ project.label }}</span>
              <span
                v-if="project.meta"
                class="shrink-0 text-[11.5px] font-normal uppercase tracking-[0.04em] text-[var(--muted)]"
              >
                {{ project.meta }}
              </span>
              <span
                class="arrow text-[var(--accent-ink)] transition-transform duration-200"
                aria-hidden="true"
                >→</span
              >
            </a>
          </div>
        </section>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Technology } from './types/Technology'

interface Props {
  tech: Technology
}

const props = defineProps<Props>()

const hasLevel = computed<boolean>(() => typeof props.tech.level === 'number')

const levelPercent = computed<number>(() => {
  const value = props.tech.level ?? 0
  const clamped = Math.min(Math.max(value, 0), 1)
  return Math.round(clamped * 100)
})
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

/*
 * Size the slotted SVG logo. Tailwind can't reach into slot contents
 * without authoring callers, so we centralize it here.
 */
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

/* Group-hover via Tailwind would need `arrow` to live inside a
   `group` ancestor that excludes other interactive children — the
   simplest read here is a CSS adjacency rule. */
.project-link:hover .arrow {
  transform: translateX(4px);
}
</style>
