<template>
  <section :id="model.sectionId" class="py-18 sm:py-27.5">
    <div class="mx-auto max-w-370 px-5.5 sm:px-8 lg:px-14">
      <!-- Section header -->
      <header class="grid items-end gap-8 mb-14 grid-cols-1 sm:grid-cols-[1fr_auto]">
        <div>
          <p
            class="m-0 mb-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-(--accent-ink)"
          >
            — {{ model.sectionLabel }} —
          </p>
          <h2
            class="m-0 font-medium leading-[1.04] tracking-[-0.02em] text-[clamp(36px,4.6vw,64px)] text-pretty"
          >
            {{ model.headlineLead
            }}<i class="italic text-(--accent-ink)">{{ model.headlineAccent }}</i
            >{{ model.headlineTrail }}
          </h2>
        </div>
        <div
          v-if="model.meta"
          class="text-[12px] tracking-[0.04em] text-(--muted) leading-[1.6] text-left sm:text-right"
        >
          {{ model.meta }}
        </div>
      </header>
      <ol class="exp-list list-none m-0 p-0 relative">
        <ExperienceRow v-for="entry in model.entries" :key="entry.id" :entry="entry" />
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import ExperienceRow from './ExperienceRow.vue'
import type { ExperienceModel } from './types/PropsModels.ts'

const { model } = defineProps<{ model: ExperienceModel }>()
</script>

<style scoped>
.exp-list::before {
  content: '';
  position: absolute;
  top: 0.75rem;
  bottom: 0.75rem;
  left: 7px;
  width: 2px;
  background: linear-gradient(to bottom, var(--line), var(--line) 50%, transparent);
}

@media (min-width: 640px) {
  .exp-list::before {
    /* Aligns with the center of the 32px marker column after the 220px date column. */
    left: calc(220px + 16px - 1px);
  }
}
</style>
