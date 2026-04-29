<template>
  <div v-if="isOpen" class="lg:hidden bg-white border-t border-border">
    <div class="px-4 py-6 space-y-3">
      <button
        v-for="link in navLinks"
        :key="link.href"
        class="block w-full text-left px-4 py-2 text-sm font-medium text-(--foreground) hover:bg-(--muted) rounded-lg transition-colors"
        @click="emit('navigate', link.href)"
      >
        {{ link.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean
  navLinks: { href: string; label: string }[]
}>()

const emit = defineEmits<{
  navigate: [sectionId: string]
}>()
</script>
