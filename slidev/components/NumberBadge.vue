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
  },
  size: {
    type: String,
    default: 'md',
    validator: value => ['sm', 'md'].includes(value)
  }
})
</script>

<template>
  <div
    class="inline-flex items-center justify-center rounded-full font-semibold flex-shrink-0"
    :class="[
      {
        'bg-fh-orange text-white': active,
        'bg-gray-400 text-white': disabled,
        'bg-fh-dark-blue text-white': !active && !disabled
      },
      size === 'sm' ? 'w-4 h-4 text-xs' : 'w-5.5 h-5.5 text-sm'
    ]"
  >
    {{ number }}
  </div>
</template>
