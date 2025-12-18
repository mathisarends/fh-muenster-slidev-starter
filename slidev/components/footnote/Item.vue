<script setup>
defineProps({
  number: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="footnote-item flex gap-1.5 items-baseline">
    <sup class="text-[#0066b3] text-[10px] leading-none">{{ number }}</sup>
    <span class="text-gray-600 text-[10px] leading-tight">
      <slot>{{ text }}</slot>
    </span>
  </div>
</template>

<style scoped>
.footnote-item {
  line-height: 1.3;
}
</style>
