<script setup>
defineProps({
  title: {
    type: String,
    default: 'Grundlegende Begriffe'
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex-1 mt-2">
    <h1 class="text-3xl font-black text-fh-dark-blue m-0 leading-tight tracking-tight">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-lg -mt-1 text-gray-600 font-light">
      {{ subtitle }}
    </p>
  </div>
</template>
