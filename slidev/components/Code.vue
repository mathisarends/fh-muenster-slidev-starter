<script setup>
import SectionTitle from '@components/SectionTitle.vue'

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
    <SectionTitle v-if="title" :text="title" mb="1" />
    <div class="code-wrapper">
      <div class="side-bar"></div>
      <div class="code-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.code-component {
  margin: 1rem 0;
}

.code-wrapper {
  display: flex;
  background: #f5f5f5;
  border: 1px solid #f5f5f5;
  overflow: hidden;
}

.side-bar {
  width: 4px;
  background: var(--fh-blue, #0066b3);
  flex-shrink: 0;
}

.code-content {
  flex: 1;
}

.code-content :deep(pre) {
  margin: 0 !important;
  padding: 0.25rem 1rem !important;
  background: #f5f5f5 !important;
  font-size: 0.85rem;
  line-height: 1.5;
}

.code-content :deep(code) {
  font-family: 'Fira Code', monospace;
}

.code-content :deep(.token.keyword) {
  color: var(--fh-blue, #0066b3) !important;
  font-weight: 600;
}

.code-content :deep(.token.string) {
  color: #c7254e !important;
}

.code-content :deep(.token.function) {
  color: #d97706 !important;
}

.code-content :deep(.token.comment) {
  color: #6c757d !important;
  font-style: italic;
}

.code-content :deep(.token.punctuation) {
  color: #333 !important;
}
</style>
