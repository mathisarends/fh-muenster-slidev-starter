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
