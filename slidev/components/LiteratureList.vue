<script setup lang="ts">
import { computed } from 'vue'
import SectionTitle from '@components/SectionTitle.vue'
import { useReferences } from '@composables/useReferences'

defineProps({
  title: {
    type: String,
    default: 'Literaturverzeichnis'
  },
  idWidth: {
    type: String,
    default: '100px'
  }
})

const { getReferences } = useReferences()
const references = computed(() => getReferences())

const formatReference = ref => {
  if (ref.text && !ref.authors && !ref.title) {
    return ref.text
  }

  let formatted = ''

  if (ref.authors && ref.authors.length > 0) {
    formatted += ref.authors.join('; ') + ': '
  }

  if (ref.title) {
    formatted += `<em>${ref.title}</em>`
  }

  if (ref.publisher) {
    formatted += `, ${ref.publisher}`
  }

  if (ref.year) {
    formatted += `, ${ref.year}`
  }

  if (ref.pages) {
    formatted += `, S. ${ref.pages}`
  }

  if (ref.url) {
    formatted += `. URL: <a href="${ref.url}" target="_blank" class="text-blue-600 hover:underline">${ref.url}</a>`
  }

  if (ref.accessed) {
    formatted += ` (Zugriff: ${ref.accessed})`
  }

  return formatted || ref.text || 'Keine Quellenangabe'
}
</script>

<template>
  <SectionTitle v-if="title" :text="title" class="mb-2" />

  <div class="h-0.5 bg-fh-dark-blue mb-0"></div>

  <div class="flex flex-col">
    <div
      v-for="(reference, index) in references"
      :key="reference.id"
      class="grid gap-4 text-sm leading-relaxed py-2 px-2"
      :class="index % 2 === 0 ? 'bg-blue-50' : 'bg-white'"
      :style="{ gridTemplateColumns: idWidth + ' 1fr' }"
    >
      <div class="text-gray-700 font-medium">[{{ reference.id }}]</div>
      <div class="text-gray-700" v-html="formatReference(reference)"></div>
    </div>
  </div>
</template>

<style scoped>
:deep(em) {
  font-style: italic;
}
</style>
