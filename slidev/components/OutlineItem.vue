<script setup>
import OutlineBadge from './OutlineBadge.vue'

defineProps({
  number: {
    type: [Number, String],
    required: true
  }
})
</script>

<template>
  <div class="flex items-center gap-2.5 py-1">
    <OutlineBadge :number="number" />
    <span class="text-[#4D4D4D] text-lg font-medium leading-tight">
      <slot />
    </span>
  </div>
</template>