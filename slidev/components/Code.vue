<script setup>
import SectionTitle from './SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'typescript'
  }
})
</script>

<template>
  <div class="code-component">
    <SectionTitle v-if="title" :text="title" mb="2" />
    <div class="code-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.code-component {
  margin: 1rem 0;
}

.code-wrapper {
  background: #f8f9fa;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  overflow: hidden;
}

.code-wrapper :deep(pre) {
  margin: 0 !important;
  padding: 1rem !important;
  background: #f8f9fa !important;
  font-size: 0.85rem;
  line-height: 1.5;
}

.code-wrapper :deep(code) {
  font-family: 'Fira Code', monospace;
}
</style>