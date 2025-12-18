<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 class="text-[#0066b3] text-xl font-medium">
    <slot>{{ text }}</slot>
  </h3>
</template>3

<style scoped>
/* Keine Unterstreichung */
</style>
