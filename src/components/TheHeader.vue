<template>
  <header
    class="sticky top-0 z-50 transition-[background-color,border-color] duration-200 backdrop-blur-md backdrop-saturate-150 border-b"
    :class="[
      isScrolled
        ? 'bg-[color-mix(in_oklab,var(--bg)_96%,transparent)] border-(--line)'
        : 'bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] border-transparent',
    ]"
  >
    <div
      class="mx-auto max-w-370 px-4.5 xs:px-[22px] sm:px-8 lg:px-14 flex items-center justify-between gap-4 h-15 xs:h-16 sm:h-19"
    >
      <!-- Brand -->
      <a
        :href="homeHref"
        @click="closeMenu"
        class="flex flex-col items-start gap-0 sm:gap-0.5 font-medium leading-tight tracking-[-0.01em] text-[16px] xs:text-[18px] sm:text-[22px] text-(--ink) no-underline"
      >
        <span>{{ name }}</span>
        <span
          class="font-normal text-[10.5px] xs:text-[11px] sm:text-[12px] tracking-[0.02em] text-(--muted)"
        >
          {{ title }}
        </span>
      </a>

      <!-- Desktop nav -->
      <nav class="flex items-center gap-1.5" aria-label="Primary">
        <div class="hidden lg:flex gap-0.5">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            class="relative px-4 py-2.5 text-[14.5px] font-medium rounded-full transition-colors duration-150 text-(--ink-soft) hover:text-(--ink) no-underline"
            :class="{
              'text-(--accent-ink) hover:text-(--accent-ink)': activeHref === link.href,
            }"
          >
            {{ link.label }}
            <span
              v-if="activeHref === link.href"
              class="absolute left-4.5 right-4.5 bottom-1.5 h-0.5 rounded bg-(--accent)"
              aria-hidden="true"
            ></span>
          </a>
        </div>

        <a
          v-if="ctaHref"
          :href="ctaHref"
          class="hidden lg:inline-flex ml-2.5 px-4.5 py-2.5 rounded-full text-[14.5px] font-medium bg-(--ink) text-(--bg) hover:bg-(--accent-ink) hover:text-white transition-colors duration-150 no-underline"
        >
          {{ ctaLabel }}
        </a>

        <button
          class="lg:hidden inline-flex items-center justify-center rounded-[10px] border border-(--line) px-2.5 xs:px-3 py-2 xs:py-[9px] font-[inherit] text-[11px] xs:text-[12px] tracking-[0.06em] cursor-pointer text-(--ink) bg-transparent"
          :aria-expanded="menuOpen"
          aria-label="Toggle menu"
          @click="toggleMenu"
        >
          {{ menuOpen ? 'CLOSE' : 'MENU' }}
        </button>
      </nav>
    </div>

    <!-- Mobile menu 
    <button
      class="lg:hidden p-2 transition-colors rounded-lg"
      :class="navBtnClass"
      @click="isMobileMenuOpen = !isMobileMenuOpen"
    >
      <X v-if="isMobileMenuOpen" class="w-6 h-6" />
      <Menu v-else class="w-6 h-6" />
    </button>
    -->
    <div
      v-show="menuOpen"
      class="lg:hidden fixed left-0 right-0 bottom-0 top-15 xs:top-16 sm:top-19 flex flex-col gap-1 z-40 px-6 py-6 bg-(--bg) border-t border-(--line) overflow-y-auto"
    >
      <a
        v-for="(link, i) in links"
        :key="link.href"
        :href="link.href"
        @click="closeMenu"
        class="px-1 py-4.5 text-[22px] font-medium text-(--ink) hover:text-(--accent-ink) no-underline"
        :class="i < links.length - 1 ? 'border-b border-(--line)' : ''"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

const props = defineProps({
  name: { type: String, default: 'Szymon Czech' },
  title: { type: String, default: 'Junior Software Developer' },
  homeHref: { type: String, default: '#home' },
  links: {
    type: Array,
    default: () => [
      { href: '#home', label: 'Home' },
      { href: '#about', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#work', label: 'Work' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  ctaHref: { type: String, default: '#contact' },
  ctaLabel: { type: String, default: 'Get to know me \u2192' },
  scrollOffset: { type: Number, default: 120 },
})

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeHref = ref(props.links[0]?.href || '')

const sectionIds = computed(() =>
  props.links.map((l) => (l.href.startsWith('#') ? l.href.slice(1) : null)).filter(Boolean),
)

let onScroll = null

const updateScrolled = () => {
  isScrolled.value = window.scrollY > 8
}

const updateActive = () => {
  const y = window.scrollY + props.scrollOffset
  let curr = sectionIds.value[0]
  for (const id of sectionIds.value) {
    const el = document.getElementById(id)
    if (el && el.offsetTop <= y) curr = id
  }
  if (curr) activeHref.value = '#' + curr
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

onMounted(() => {
  onScroll = () => {
    updateScrolled()
    updateActive()
  }
  document.addEventListener('scroll', onScroll, { passive: true })
  updateScrolled()
  updateActive()
})

onBeforeUnmount(() => {
  if (onScroll) document.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>
