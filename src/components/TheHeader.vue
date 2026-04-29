<template>
  <header
    class="fixed top-0 z-50 w-full transition-[background-color,border-color] duration-200 backdrop-blur-md backdrop-saturate-150 border-b"
    :class="[
      isScrolled
        ? 'bg-[color-mix(in_oklab,var(--bg)_96%,transparent)] border-(--line)'
        : 'bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] border-transparent',
    ]"
  >
    <div
      class="mx-auto max-w-370 px-4.5 xs:px-[22px] sm:px-8 lg:px-14 flex items-center justify-between gap-4 h-15 xs:h-16 sm:h-19"
    >
      <a
        href="#home"
        @click.prevent="scrollToSection('home')"
        class="flex flex-col items-start gap-0 sm:gap-0.5 font-medium leading-tight tracking-[-0.01em] text-[16px] xs:text-[18px] sm:text-[22px] text-(--ink) no-underline"
      >
        <span> Szymon Czech </span>
        <span
          class="font-normal text-[10.5px] xs:text-[11px] sm:text-[12px] tracking-[0.02em] text-(--muted)"
        >
          Junior Software Developer
        </span>
      </a>

      <nav class="flex items-center gap-1.5" aria-label="Primary">
        <div class="hidden lg:flex gap-0.5">
          <a
            v-for="link in navigation"
            :key="link.href"
            @click="scrollToSection(link.id)"
            class="relative px-4 py-2.5 text-[14.5px] font-medium rounded-full transition-colors duration-150 bg-transparent border-none cursor-pointer font-[inherit]"
            :class="
              activeId === link.id ? 'text-(--accent-ink)' : 'text-(--ink-soft) hover:text-(--ink)'
            "
          >
            {{ link.label }}
            <span
              v-if="activeId === link.id"
              class="absolute left-4.5 right-4.5 bottom-1.5 h-0.5 rounded bg-(--accent)"
              aria-hidden="true"
            />
          </a>
        </div>
        <a
          href="#contact"
          class="hidden lg:inline-flex ml-2.5 px-4.5 py-2.5 rounded-full text-[14.5px] font-medium bg-(--ink) text-(--bg) hover:bg-(--accent-ink) hover:text-white transition-colors duration-150 no-underline"
        >
          Get to know me →
        </a>
        <button
          class="lg:hidden inline-flex items-center justify-center rounded-[10px] border border-(--line) px-2.5 xs:px-3 py-2 xs:py-[9px] font-[inherit] text-[11px] xs:text-[12px] tracking-[0.06em] cursor-pointer text-(--ink) bg-transparent"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          {{ isMobileMenuOpen ? 'CLOSE' : 'MENU' }}
        </button>
      </nav>
    </div>
    <NavigationMobileMenu
      :is-open="isMobileMenuOpen"
      :nav-links="navigation"
      :active-id="activeId"
      @navigate="scrollToSection"
    />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavigationMobileMenu from './NavigationMobileMenu.vue'

interface NavLink {
  id: string
  href: string
  label: string
}

const scrollOffset = ref(80)

const navigation: NavLink[] = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'about', href: '#about', label: 'About me' },
  { id: 'skills', href: '#skills', label: 'Skills' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'education', href: '#education', label: 'Education' },
]

const isScrolled = ref(false)
const activeId = ref(navigation[0]?.id)
const isMobileMenuOpen = ref(false)

let isScrollingTo: string | null = null
let scrollEndTimer: ReturnType<typeof setTimeout> | null = null

const updateState = () => {
  const y = window.scrollY
  isScrolled.value = y > scrollOffset.value

  if (isScrollingTo) {
    return
  }

  const threshold = y + scrollOffset.value
  let current = navigation[0]?.id

  for (const link of navigation) {
    const el = document.getElementById(link.id)
    if (el && el.offsetTop <= threshold) current = link.id
  }

  activeId.value = current ?? navigation[0]?.id
}

const scrollToSection = (id: string) => {
  const el = document.getElementById(id)
  if (!el) return

  isScrollingTo = id
  activeId.value = id
  isMobileMenuOpen.value = false

  history.pushState(null, '', `#${id}`)

  const top = el.getBoundingClientRect().top + window.scrollY - scrollOffset.value
  window.scrollTo({ top, behavior: 'smooth' })

  const release = () => {
    if (scrollEndTimer) clearTimeout(scrollEndTimer)
    isScrollingTo = null
  }

  if ('onscrollend' in window) {
    window.addEventListener('scrollend', release, { once: true })
  } else {
    if (scrollEndTimer) {
      clearTimeout(scrollEndTimer)
    }
    scrollEndTimer = setTimeout(release, 800)
  }
}

onMounted(() => {
  const hash = window.location.hash.slice(1)
  if (hash && navigation.some((l) => l.id === hash)) {
    activeId.value = hash
  }

  window.addEventListener('scroll', updateState, { passive: true })
  updateState()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateState)
  if (scrollEndTimer) clearTimeout(scrollEndTimer)
})
</script>
