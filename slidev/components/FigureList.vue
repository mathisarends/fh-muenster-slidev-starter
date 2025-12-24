<script setup>
import { computed } from 'vue'
import SectionTitle from '@components/SectionTitle.vue'
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
const figures = computed(() => getFigures())
</script>

<template>
  <SectionTitle v-if="title" :text="title" class="mb-2" />

  <div class="h-0.5 bg-fh-dark-blue mb-0"></div>

  <div class="flex flex-col">
    <div
      v-for="(figure, index) in figures"
      :key="figure.id"
      class="grid gap-4 text-sm leading-relaxed py-2 px-2"
      :class="index % 2 === 0 ? 'bg-blue-50' : 'bg-white'"
      :style="{ gridTemplateColumns: idWidth + ' 1fr' }"
    >
      <div class="text-gray-700 font-medium">Abb. {{ index + 1 }}</div>
      <div class="text-gray-700">
        <div>{{ figure.caption }}</div>
        <div v-if="figure.source" class="text-gray-500 italic text-xs mt-1">
          {{ figure.source }}
        </div>
      </div>
    </div>
  </div>
</template>