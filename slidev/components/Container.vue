<script setup>
defineProps({
  maxWidth: {
    type: String,
    default: '80%'
  }
})
</script>

<template>
  <div class="container" :style="{ maxWidth }">
    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
</style>
