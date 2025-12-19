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
        'text-[#f79646]': active,
        'text-gray-400': disabled,
        'text-[#003978]': !active && !disabled
      }"
    >
      <slot />
    </span>
  </div>
</template>