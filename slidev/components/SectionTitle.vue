<script setup>
defineProps({
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <h3 class="text-fh-dark-blue text-lg font-medium">
    <slot>{{ text }}</slot>
  </h3>
</template>
3

<style scoped>
/* Keine Unterstreichung */
</style>
