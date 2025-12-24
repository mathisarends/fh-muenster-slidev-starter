<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useFigures } from '../composables/useFigures'

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
  },
  figureId: {
    type: String,
    default: ''
  }
})

const { registerFigure } = useFigures()
const figureInfo = ref<{ id: string; number: number } | null>(null)

const uniqueId = computed(() => {
  if (props.figureId) {
    return props.figureId
  }
  return `fig-${props.src.replace(/[^a-zA-Z0-9]/g, '-')}`
})

onMounted(() => {
  if (props.caption || props.source) {
    figureInfo.value = registerFigure(uniqueId.value, {
      src: props.src,
      alt: props.alt || '',
      caption: props.caption || '',
      source: props.source || ''
    })
  }
})
</script>

<template>
  <div class="image-container flex flex-col gap-2">
    <h3 v-if="title" class="text-fh-dark-blue text-xl font-medium mb-2">
      {{ title }}
    </h3>

    <div class="image-wrapper" :style="{ maxWidth: maxWidth, margin: '0 auto' }">
      <img
        :src="src"
        :alt="alt"
        :style="{ width: width, maxWidth: '100%', height: 'auto' }"
        class="object-contain"
      />

      <div v-if="caption || source || figureInfo" class="mt-2 text-sm text-gray-700">
        <div v-if="figureInfo" class="font-medium">
          Abbildung {{ figureInfo.number }}:
        </div>
        <div v-if="caption" v-html="caption"></div>
        <div v-if="source" class="text-gray-500 italic text-xs mt-1">
          {{ source }}
        </div>
      </div>
    </div>
  </div>
</template>
