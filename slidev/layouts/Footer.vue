<script setup>
defineProps({
  presentation: {
    type: String,
    default: ''
  },
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
  <div class="flex justify-between items-center py-1.75 px-8 -mx-8 -mb-4 mt-4 bg-gradient-to-r from-[#002855] to-[#003366]">
    <div class="text-[#D9D9D9] text-[11px]">
      <span v-if="presentation">{{ presentation }}</span>
      <span v-if="presentation && chapter"> | </span>
      <span v-if="chapter">{{ chapter }}</span>
      <span v-if="chapter && section"> | </span>
      <span v-if="section">{{ section }}</span>
    </div>
    <span class="text-[#D9D9D9] text-[11px]">{{ currentPage }}</span>
  </div>
</template>