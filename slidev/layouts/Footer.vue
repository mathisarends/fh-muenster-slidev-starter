<script setup>
import { usePresentationInfo } from '@composables/usePresentationInfo'

const info = usePresentationInfo()

defineProps({
  chapter: {
    type: String,
    default: ''
  },
  section: {
    type: String,
    default: ''
  },
  currentPage: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    class="flex justify-between items-center py-1 px-8 -mx-8 -mb-4 mt-2 bg-gradient-to-r from-[#002855] to-[#003366]"
  >
    <div class="text-[#D9D9D9] text-[10px]">
      <span>{{ info.title }} | {{ info.subtitle }}</span>
      <span v-if="chapter"> | {{ chapter }}</span>
      <span v-if="section"> | {{ section }}</span>
    </div>
    <span class="text-[#D9D9D9] text-[10.5px]">{{ currentPage }}</span>
  </div>
</template>
