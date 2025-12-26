<script setup>
import SectionTitle from '@components/SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  citations: {
    type: Array,
    default: () => []
  },
  idWidth: {
    type: String,
    default: '100px'
  }
})
</script>

<template>
  <SectionTitle v-if="title" :text="title" class="mb-2" />

  <div class="h-0.5 bg-fh-dark-blue mb-0"></div>

  <div class="flex flex-col">
    <div
      v-for="(citation, index) in citations"
      :key="index"
      class="grid gap-4 text-sm leading-relaxed py-2 px-2"
      :class="index % 2 === 0 ? 'bg-blue-50' : 'bg-white'"
      :style="{ gridTemplateColumns: idWidth + ' 1fr' }"
    >
      <div class="text-gray-700 font-medium">{{ citation.id }}</div>
      <div class="text-gray-700" v-html="citation.text"></div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
:deep(em) {
  font-style: italic;
}
</style>
