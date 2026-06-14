<template>
  <li
    class="exp-row group relative grid items-start gap-8 py-9 grid-cols-[16px_1fr] sm:grid-cols-[220px_32px_1fr] sm:gap-8"
    :data-current="entry.isCurrent ? 'true' : null"
  >
    <!-- When (date / duration / current badge) -->
    <div
      class="order-2 sm:order-1 sm:pt-1 flex flex-row sm:flex-col flex-wrap items-center sm:items-start gap-2.5 sm:gap-1.5 col-start-2 sm:col-start-1"
    >
      <span class="text-[13px] font-medium tracking-[0.02em] text-(--ink)">
        {{ entry.dateRange }}
      </span>

      <span v-if="entry.duration" class="text-[11px] uppercase tracking-[0.14em] text-(--muted)">
        {{ entry.duration }}
      </span>

      <span
        v-if="entry.isCurrent"
        class="exp-current inline-flex items-center gap-1.5 mt-0 sm:mt-1 px-2.5 py-1 rounded-full text-[10.5px] font-semibold uppercase tracking-[0.12em] text-(--accent-ink) bg-(--accent-soft)"
      >
        Current role
      </span>
    </div>

    <!-- Timeline marker -->
    <div
      class="order-1 sm:order-2 row-span-2 sm:row-span-1 flex justify-center pt-1.5 relative z-1 col-start-1 sm:col-start-2"
    >
      <span
        class="exp-dot block w-3.5 h-3.5 rounded-full bg-(--bg) border-2 border-(--line) transition-[border-color,transform,background-color] duration-200 group-hover:border-(--accent) group-hover:scale-110"
      />
    </div>

    <!-- Body -->
    <div class="order-3 min-w-0 col-start-2 sm:col-start-3">
      <p class="text-[11.5px] font-medium uppercase tracking-[0.14em] text-(--accent-ink) m-0 mb-1">
        {{ entry.role }}
      </p>

      <div class="flex items-center gap-3.5 mb-3.5">
        <img
          v-if="entry.logo"
          :src="entry.logo"
          :alt="logoAltText"
          loading="lazy"
          decoding="async"
          class="w-12 h-12 rounded-[10px] border border-(--line) bg-(--bg-variant) object-cover shrink-0"
        />
        <h3
          class="m-0 font-medium leading-[1.1] tracking-[-0.02em] text-(--ink) text-[26px] sm:text-[32px]"
        >
          {{ entry.company }}
        </h3>
      </div>

      <p class="m-0 mb-4 max-w-[60ch] text-[16px] leading-[1.65] text-(--ink-soft)">
        {{ entry.description }}
      </p>

      <ul v-if="entry.highlights.length" class="list-none m-0 p-0 flex flex-col gap-2">
        <li
          v-for="highlight in entry.highlights"
          :key="highlight"
          class="relative pl-5.5 text-[14.5px] leading-[1.55] text-(--ink-soft) before:content-[''] before:absolute before:left-1 before:top-[0.7em] before:w-2 before:h-0.5 before:rounded-[1px] before:bg-[var(--accent)]"
        >
          {{ highlight }}
        </li>
      </ul>

      <div v-if="entry.stack.length" class="mt-4 flex flex-wrap gap-1.5">
        <span
          v-for="item in entry.stack"
          :key="item"
          class="text-[11px] px-2.5 py-1.25 rounded-full border border-(--line) text-(--ink-soft) bg-(--bg)"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ExperienceEntry } from './types/ExperienceEntry'

interface Props {
  entry: ExperienceEntry
}

const props = defineProps<Props>()

const logoAltText = computed<string>(() => props.entry.logoAlt ?? `${props.entry.company} logo`)
</script>

<style scoped>
/*
 * The hover accent stripe sits in the gutter to the left of the row.
 * Pure-Tailwind expression would require arbitrary peer / group classes
 * that fight the timeline grid — keeping it as a single scoped rule is
 * simpler and a hair more performant than a slotted absolute element.
 */
.exp-row::before {
  content: '';
  position: absolute;
  top: 2.25rem;
  bottom: 2.25rem;
  left: -1.5rem;
  width: 0;
  border-radius: 3px;
  background: var(--accent);
  transition: width 320ms cubic-bezier(0.2, 0.7, 0.2, 1);
}
.exp-row:hover::before {
  width: 3px;
}

.exp-row[data-current='true'] .exp-dot {
  background: var(--accent);
  border-color: var(--accent);
}

/*
 * Pulsing dot on the "Current role" badge — uses the page's --accent-rgb
 * channel so it follows the active palette.
 */
.exp-current::before {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgb(var(--accent-rgb) / 0.55);
  animation: exp-pulse 1.8s infinite;
}

@keyframes exp-pulse {
  70% {
    box-shadow: 0 0 0 10px rgb(var(--accent-rgb) / 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(var(--accent-rgb) / 0);
  }
}
</style>
