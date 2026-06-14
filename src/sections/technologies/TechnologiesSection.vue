<template>
  <section :id="model.sectionId" class="py-18 sm:py-27.5 bg-(--bg-variant)">
    <div class="mx-auto max-w-370 px-5.5 sm:px-8 lg:px-14">
      <header class="grid items-end gap-8 mb-14 grid-cols-1 sm:grid-cols-[1fr_auto]">
        <div>
          <p
            class="m-0 mb-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-(--accent-ink)"
          >
            — {{ model.sectionLabel }} —
          </p>
          <h2
            class="m-0 font-medium leading-[1.04] tracking-[-0.02em] text-pretty text-[clamp(36px,4.6vw,64px)]"
          >
            {{ model.headlineLead
            }}<i class="italic text-(--accent-ink)">{{ model.headlineAccent }}</i
            >{{ model.headlineTrail }}
          </h2>
        </div>
        <div
          v-if="model.meta"
          class="text-[12px] tracking-[0.04em] text-(--muted) leading-[1.6] text-left sm:text-right whitespace-pre-line"
        >
          {{ model.meta }}
        </div>
      </header>
      <div class="flex flex-col">
        <TechRow v-for="tech in model.technologies" :key="tech.id" :tech="tech" />
      </div>
      <AlsoFluentWith :technology-tags="model.alsoFluentWith" />
    </div>
  </section>
</template>

<script setup lang="ts">
import TechRow from './TechRow.vue'
import AlsoFluentWith from './AlsoFluentWith.vue'
import type { TechnologiesModel } from './technologies'

const { model } = defineProps<{ model: TechnologiesModel }>()
</script>
