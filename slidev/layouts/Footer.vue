<script setup>
const info = $slidev.configs?.presentationInfo || {
  title: '',
  subtitle: ''
}

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
  <div class="flex justify-between items-center py-1.5 px-8 -mx-8 -mb-4 mt-2 bg-[#f8f8f8]">
    <div class="text-gray-600 text-[11px]">
      <span>{{ info.title }} | {{ info.subtitle }}</span>
      <span v-if="chapter"> | {{ chapter }}</span>
      <span v-if="section"> | {{ section }}</span>
    </div>
    <span class="text-gray-600 text-[11.5px]">{{ currentPage - 1 }}</span>
  </div>
</template>
