<script setup>
import { onMounted } from 'vue'
import SectionTitle from '@components/SectionTitle.vue'
import { useFigures } from '@composables/useFigures'

const props = defineProps({
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

const { registerFigure } = useFigures()
let figureInfo = { id: '', number: 0 }

onMounted(() => {
  if (props.caption || props.source) {
    figureInfo = registerFigure({
      src: props.src,
      alt: props.alt,
      caption: props.caption,
      source: props.source
    })
  }
})
</script>

<template>
  <div class="my-4">
    <SectionTitle v-if="title" :text="title" mb="2" />

    <div class="inline-block" :style="{ maxWidth: maxWidth }">
      <img
        :id="figureInfo.id"
        :src="src"
        :alt="alt"
        :style="{ width: width }"
        class="block h-auto"
      />

      <div v-if="caption || source" class="mt-2">
        <p v-if="caption" class="text-gray-500 text-xs m-0">
          <span v-if="figureInfo.number" class="font-semibold">Abb. {{ figureInfo.number }}:</span>
          {{ caption }}
        </p>
        <p v-if="source" class="text-gray-400 text-xs italic m-0">Quelle: {{ source }}</p>
      </div>
    </div>
  </div>
</template>
