<script setup>
import { computed } from 'vue'
import CitationTable from '@components/CitationTable.vue'
import { useFigures } from '@composables/useFigures'

defineProps({
  title: {
    type: String,
    default: 'Abbildungsverzeichnis'
  },
  idWidth: {
    type: String,
    default: '120px'
  }
})

const { getFigures } = useFigures()
const figures = computed(() =>
  getFigures().map((figure, index) => ({
    id: `Abb. ${index + 1}`,
    text: `<div>${figure.caption}</div>${figure.source ? `<div class="text-gray-500 italic text-xs mt-1">${figure.source}</div>` : ''}`
  }))
)
</script>

<template>
  <CitationTable :title="title" :citations="figures" :id-width="idWidth" />
</template>
