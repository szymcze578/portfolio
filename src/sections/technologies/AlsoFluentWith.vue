<template>
  <div
    class="also mt-16 relative overflow-hidden rounded-3xl border bg-(--bg) border-(--line) px-11 py-10 shadow-[0_30px_60px_-40px_rgba(11,26,51,0.18)]"
  >
    <div class="also-head flex items-baseline justify-between gap-6 mb-5 flex-wrap">
      <div>
        <p
          class="label m-0 text-[11px] uppercase tracking-[0.18em] font-medium text-(--accent-ink)"
        >
          — Also fluent with —
        </p>
        <h3
          class="mt-1 mb-0 font-medium tracking-[-0.01em] text-(--ink) text-[clamp(24px,2.4vw,32px)]"
        >
          Tools and technologies in my daily rotation
        </h3>
      </div>
      <span class="text-[12px] text-(--muted)"
        >Picked up on the job, sharpened on side projects</span
      >
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        class="tag text-[13px] px-3.5 py-2 rounded-full bg-(--accent-soft) text-(--accent-ink) border border-transparent cursor-default"
        v-for="tag in technologyTags"
        :key="tag"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  technologyTags?: string[]
}>()
</script>

<style scoped>
.also::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background: var(--accent);
}

.tag {
  transition:
    transform 180ms ease,
    background 180ms ease,
    border-color 180ms ease;
}
.tag:hover {
  transform: translateY(-2px);
  background: var(--bg);
  border-color: var(--accent);
}

@media (max-width: 720px) {
  .also {
    padding: 28px;
    border-radius: 18px;
  }
  .also-head {
    margin-bottom: 14px;
  }
}
</style>
