<script setup>
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
  <div
    class="inline-flex items-center justify-center w-5 h-5 rounded-full font-semibold text-sm flex-shrink-0"
    :class="{
      'bg-fh-orange text-white': active,
      'bg-gray-300 text-white': disabled,
      'bg-fh-dark-blue text-white': !active && !disabled
    }"
  >
    {{ number }}
  </div>
</template>
