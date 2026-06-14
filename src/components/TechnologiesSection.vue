<template>
  <section :id="model.sectionId" class="py-[72px] sm:py-[110px] bg-(--bg-variant)">
    <div class="mx-auto max-w-[1480px] px-[22px] sm:px-8 lg:px-14">
      <!-- Section header -->
      <header class="grid items-end gap-8 mb-14 grid-cols-1 sm:grid-cols-[1fr_auto]">
        <div>
          <p
            class="m-0 mb-3.5 text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--accent-ink)]"
          >
            — {{ model.sectionLabel }} —
          </p>
          <h2
            class="m-0 font-medium leading-[1.04] tracking-[-0.02em] [text-wrap:pretty] text-[clamp(36px,4.6vw,64px)]"
          >
            {{ model.headlineLead }}<i class="italic text-[var(--accent-ink)]">{{ model.headlineAccent }}</i
            >{{ model.headlineTrail }}
          </h2>
        </div>

        <div
          v-if="model.meta"
          class="text-[12px] tracking-[0.04em] text-[var(--muted)] leading-[1.6] text-left sm:text-right whitespace-pre-line"
        >
          {{ model.meta }}
        </div>
      </header>

      <!-- Rows -->
      <div class="flex flex-col">
        <TechRow v-for="tech in model.technologies" :key="tech.id" :tech="tech">
          <template #logo>
            <component :is="logoFor(tech.id)" />
          </template>
        </TechRow>
      </div>

      <!-- Highlighted footer panel -->
      <AlsoFluentWith :technology-tags="model.alsoFluentWith" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, type Component } from 'vue'
import TechRow from './TechRow.vue'
import AlsoFluentWith from './AlsoFluentWith.vue'
import VueIcon from './icons/VueIcon.vue'
import JavaIcon from './icons/JavaIcon.vue'
import type { TechnologiesModel } from './types/PropsModels.ts'

const { model } = defineProps<{ model: TechnologiesModel }>()

/**
 * Inline SVG marks for each technology. Kept inside the section so the
 * file stays self-contained and the TechRow component remains a pure
 * presentational primitive.
 *
 * To add a new technology, drop another entry here keyed by `tech.id`.
 */
const LOGO_REGISTRY: Readonly<Record<string, Component>> = {
  vue: VueIcon,
  java: JavaIcon,
}

const FallbackLogo: Component = {
  render: () =>
    h('svg', { viewBox: '0 0 24 24', xmlns: 'http://www.w3.org/2000/svg' }, [
      h('rect', { x: 4, y: 4, width: 16, height: 16, rx: 3, fill: 'currentColor', opacity: 0.2 }),
    ]),
}

const logoFor = (id: string): Component => LOGO_REGISTRY[id] ?? FallbackLogo
</script>
