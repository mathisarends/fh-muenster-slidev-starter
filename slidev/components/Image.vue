<script setup>
import SectionTitle from '@components/SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: 'auto'
  },
  maxWidth: {
    type: String,
    default: '100%'
  }
})
</script>

<template>
  <div class="my-4">
    <SectionTitle v-if="title" :text="title" mb="2" />

    <div class="inline-block" :style="{ maxWidth: maxWidth }">
      <img :src="src" :alt="alt" :style="{ width: width }" class="block h-auto" />

      <div v-if="caption" class="mt-2">
        <p class="text-gray-500 text-xs m-0">{{ caption }}</p>
      </div>
    </div>
  </div>
</template>