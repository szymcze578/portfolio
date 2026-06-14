<template>
  <section
    ref="root"
    :id="model.sectionId"
    class="edu relative overflow-hidden border-y border-(--dark-border) bg-[#14181f] py-27.5 text-(--dark-ink) md:py-18"
  >
    <span class="edu-glow edu-glow--tl" aria-hidden="true"></span>
    <span class="edu-glow edu-glow--br" aria-hidden="true"></span>

    <div class="relative mx-auto w-full max-w-370 px-14 max-[1100px]:px-8 max-[720px]:px-5.5">
      <header
        class="reveal mb-14 grid grid-cols-[1fr_auto] items-end gap-6 border-b border-(--dark-border) pb-6 max-[720px]:grid-cols-1"
      >
        <div>
          <p class="mb-3.5 text-xs uppercase tracking-[0.14em] text-(--dark-soft)">
            — {{ model.label }} —
          </p>
          <h2
            class="m-0 max-w-180 text-[clamp(36px,4.4vw,56px)] font-[380] leading-[1.05] tracking-[-0.02em]"
          >
            {{ model.heading }} <i class="font-normal not-italic text-(--accent)">{{ model.headingAccent }}</i>
          </h2>
        </div>
        <p class="text-right text-xs leading-[1.7] text-(--dark-soft) max-[720px]:text-left">
          {{ model.meta }}
        </p>
      </header>
      <div class="grid grid-cols-2 gap-5.5 max-[720px]:grid-cols-1 max-[720px]:gap-4">
        <article
          v-for="(item, i) in model.items"
          :key="item.school"
          class="edu-card reveal relative flex flex-col gap-4.5 overflow-hidden rounded-[20px] border border-(--dark-border) bg-white/4 px-8.5 pb-7.5 pt-8.5 max-[720px]:rounded-2xl max-[720px]:px-6 max-[720px]:py-6.5"
          :style="{ transitionDelay: `${i * 80}ms` }"
        >
          <div class="flex flex-wrap items-center justify-between gap-3.5">
            <div class="flex min-w-0 items-center gap-3.5">
              <span
                class="edu-logo grid h-12 w-12 flex-none place-items-center overflow-hidden rounded-xl border border-(--dark-border) bg-white/6"
              >
                <img
                  v-if="item.logo && !failedLogos.has(item.school)"
                  :src="item.logo"
                  :alt="`${item.school} logo`"
                  class="h-full w-full object-contain"
                  @error="failedLogos.add(item.school)"
                />
                <span v-else class="text-[15px] font-semibold tracking-[0.02em] text-(--accent)">{{
                  item.abbr
                }}</span>
              </span>
              <span class="text-[13px] font-medium tracking-[0.02em] text-(--dark-ink)">{{
                item.date
              }}</span>
            </div>
            <span
              class="edu-badge inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--accent-rgb)/0.14)] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-(--accent)"
              :class="{ 'edu-badge--static': !item.current }"
              >{{ item.badge }}</span
            >
          </div>
          <h3 class="m-0 text-2xl font-medium leading-[1.18] tracking-[-0.01em] text-(--dark-ink)">
            {{ item.school }}
            <span class="mt-1 block text-[13px] font-normal tracking-normal text-(--dark-soft)">{{
              item.schoolNative
            }}</span>
          </h3>
          <dl class="mt-auto flex flex-col gap-3 border-t border-(--dark-border) pt-4.5">
            <div class="flex flex-col gap-0.75">
              <dt class="text-[10.5px] font-medium uppercase tracking-[0.14em] text-(--dark-soft)">
                Field &amp; profile of study
              </dt>
              <dd class="m-0 text-[14.5px] leading-[1.45] text-(--dark-ink)">{{ item.field }}</dd>
            </div>
            <div class="flex flex-col gap-0.75">
              <dt class="text-[10.5px] font-medium uppercase tracking-[0.14em] text-(--dark-soft)">
                Professional title
              </dt>
              <dd class="m-0 text-[14.5px] leading-[1.45] text-(--dark-ink)">
                <b class="font-semibold text-(--accent)">{{ item.titleMain }}</b>
                {{ item.titleNative }}
              </dd>
            </div>
          </dl>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import type { EducationModel } from './types/PropsModels'

const { model } = defineProps<{ model: EducationModel }>()

/* Tracks logos that failed to load so the monogram fallback can take over. */
const failedLogos = reactive(new Set<string>())

/* Scroll-reveal — progressively enhanced. Anything already on screen reveals
   immediately; the observer only handles elements scrolled into view later. */
const root = ref<HTMLElement | null>(null)

onMounted(() => {
  const targets = Array.from(root.value?.querySelectorAll<HTMLElement>('.reveal') ?? [])
  const reveal = (el: HTMLElement) => el.classList.add('is-visible')

  const inView = (el: HTMLElement) => {
    const r = el.getBoundingClientRect()
    return r.top < (window.innerHeight || document.documentElement.clientHeight) && r.bottom > 0
  }

  if (!('IntersectionObserver' in window)) {
    targets.forEach(reveal)
    return
  }

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          reveal(entry.target as HTMLElement)
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 },
  )

  // Reveal what's on screen now; defer the rest to the observer.
  targets.forEach((el) => (inView(el) ? reveal(el) : io.observe(el)))
})
</script>

<style scoped>
/* Ambient radial glows (not practical as Tailwind utilities). */
.edu-glow {
  position: absolute;
  pointer-events: none;
}
.edu-glow--tl {
  inset: -28% auto auto -12%;
  width: 680px;
  height: 680px;
  background: radial-gradient(circle, rgb(var(--accent-rgb) / 0.16), transparent 60%);
}
.edu-glow--br {
  inset: auto -10% -30% auto;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgb(var(--accent-rgb) / 0.1), transparent 60%);
}

/* Card hover + animated accent bar. */
.edu-card {
  transition:
    transform 240ms ease,
    background 240ms ease,
    border-color 240ms ease;
}
.edu-card::before {
  content: '';
  position: absolute;
  inset: 0 auto 0 0;
  width: 3px;
  background: var(--accent);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 320ms cubic-bezier(0.2, 0.7, 0.2, 1);
}
.edu-card:hover {
  transform: translateY(-3px);
  background: rgb(255 255 255 / 0.07);
  border-color: rgb(var(--accent-rgb) / 0.45);
}
.edu-card:hover::before {
  transform: scaleY(1);
}

/* Pulsing "current" dot inside the badge. */
.edu-badge::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 0 rgb(var(--accent-rgb) / 0.55);
  animation: edu-pulse 1.8s infinite;
}
.edu-badge--static::before {
  animation: none;
  box-shadow: none;
}
@keyframes edu-pulse {
  70% {
    box-shadow: 0 0 0 10px rgb(var(--accent-rgb) / 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(var(--accent-rgb) / 0);
  }
}

/* Scroll-reveal. */
.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 700ms ease,
    transform 700ms ease;
}
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
