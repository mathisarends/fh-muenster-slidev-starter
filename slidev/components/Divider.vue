<script setup>
defineProps({
  length: {
    type: [String, Number],
    default: 100
  },
  color: {
    type: String,
    default: 'border-gray-300'
  },
  thickness: {
    type: String,
    default: 'border-t'
  }
})
</script>

<template>
  <div :class="[thickness, color]" :style="{ width: length + '%' }"></div>
</template>

<style scoped></style>
