<script setup>
defineProps({
  length: {
    type: [String, Number],
    default: 100
  }
})
</script>

<template>
  <div class="border-t border-gray-300" :style="{ width: length + '%' }"></div>
</template>

<style scoped></style>
