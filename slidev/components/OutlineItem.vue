<script setup>
import OutlineBadge from './OutlineBadge.vue'

defineProps({
  number: {
    type: [Number, String],
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex items-center gap-2.5 py-1">
    <OutlineBadge :number="number" :active="active" :disabled="disabled" />
    <span 
      class="text-lg font-medium leading-tight"
      :class="{
        'text-fh-orange': active,
        'text-gray-400': disabled,
        'text-fh-dark-blue': !active && !disabled
      }"
    >
      <slot />
    </span>
  </div>
</template>