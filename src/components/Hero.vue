<template>
  <section id="home" class="relative overflow-hidden min-h-screen items-center flex">
    <div
      class="mx-auto max-w-370 px-4.5 xs:px-[22px] sm:px-8 lg:px-14 grid items-center gap-6 grid-cols-1 sm:grid-cols-[48px_1fr] sm:gap-8 md:grid-cols-[64px_1fr_1fr] md:gap-12"
    >
      <SocialRail />

      <div class="flex flex-col">
        <div
          class="inline-flex items-center gap-2.5 mb-7 text-[12px] uppercase tracking-[0.14em] text-(--muted) font-(--font)"
        >
          <span class="hero-pulse w-2 h-2 rounded-full bg-(--accent)"></span>
          Open to opportunities {{ '\u00b7' }} 2026
        </div>

        <h1
          class="m-0 mb-5.5 font-(--font) leading-[1.02] tracking-[-0.02em] text-(--ink) text-[44px] sm:text-[clamp(44px,6vw,76px)]"
          style="font-weight: 380"
        >
          <span
            class="hero-accent relative whitespace-nowrap italic font-normal text-(--accent-ink)"
          >
            {{ 'Get' }} </span
          >{{ ' to know me' }}
        </h1>

        <p class="m-0 mb-9 text-[18px] leading-[1.6] text-(--ink-soft) max-w-120">
          Hi, I'm Szymon — a Junior Software Developer.
        </p>

        <a
          :href="ctaHref"
          download="Szymon Czech Fullstack Developer CV.pdf"
          class="inline-flex items-center w-fit gap-2.5 mt-7 px-5.5 py-3.5 rounded-xl text-[15px] font-medium bg-(--ink) text-(--bg) no-underline cursor-pointer transition-[transform,background-color,box-shadow] duration-150 hover:-translate-y-0.5 hover:bg-(--accent-ink) shadow-[0_1px_0_rgba(0,0,0,0.05),0_6px_18px_-6px_rgba(26,23,20,0.4)]"
        >
          Download CV
          <DownloadIcon />
        </a>
      </div>

      <!-- Portrait -->
      <div
        class="portrait relative w-full max-w-125 md:max-w-125 mx-auto md:ml-auto md:mr-0 mt-6 md:mt-0 sm:col-span-2 md:col-auto"
        style="aspect-ratio: 1 / 1.05"
      >
        <div class="hero-blob absolute inset-0 bg-(--accent)"></div>
        <div
          class="hero-photo absolute inset-[2.5%] bg-cover bg-position-[center_22%]"
          :style="{ backgroundImage: `url('${portraitSrc}')` }"
          role="img"
          src
          :aria-label="portraitAlt"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DownloadIcon from './icons/DownloadIcon.vue'
import SocialRail from './SocialRail.vue'
import { ref } from 'vue'

defineProps({
  ctaHref: { type: String, default: '@/assets/Szymon Czech Fullstack Developer CV.pdf' },
  ctaDownload: { type: Boolean, default: true },
  portraitAlt: { type: String, default: 'Portrait' },
})

const isMobileMenuOpen = ref(false)
import portraitSrc from '@/assets/profile_me.jpg'
</script>

<style scoped>
/* Pulse dot */
.hero-pulse {
  box-shadow: 0 0 0 0 rgb(var(--accent-rgb) / 0.55);
  animation: heroPulse 1.8s infinite;
}
@keyframes heroPulse {
  70% {
    box-shadow: 0 0 0 10px rgb(var(--accent-rgb) / 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgb(var(--accent-rgb) / 0);
  }
}

/* Accent underline highlight */
.hero-accent::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
  height: 8px;
  background: var(--accent-soft);
  z-index: -1;
  border-radius: 4px;
}

/* Morphing blob + photo mask */
.hero-blob,
.hero-photo {
  border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  animation: heroMorph 14s ease-in-out infinite;
}
.hero-blob {
  transform: rotate(-6deg);
}
.hero-photo {
  filter: contrast(1.02) saturate(1.02);
}

@keyframes heroMorph {
  0%,
  100% {
    border-radius: 60% 40% 55% 45% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 45% 55% 40% 60% / 55% 45% 60% 40%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-pulse,
  .hero-blob,
  .hero-photo {
    animation: none;
  }
}
</style>
