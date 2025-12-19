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
    <h1 class="text-4xl font-extrabold text-[#003978] m-0 leading-tight">
      {{ title }}
    </h1>
    <p v-if="subtitle" class="text-xl -mt-0.5 text-[#4D4D4D] font-normal">
      {{ subtitle }}
    </p>
  </div>
</template>
