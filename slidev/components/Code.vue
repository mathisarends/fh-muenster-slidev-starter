<script setup>
import SectionTitle from '@components/SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="code-component">
    <SectionTitle v-if="title" :text="title" />
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
  border-radius: 0.5rem;
  overflow: hidden;
  background: #f8f8f8;
}

.side-bar {
  width: 4px;
  background: var(--fh-blue, #0066b3);
  flex-shrink: 0;
}

.code-content {
  flex: 1;
  overflow: auto;
}

/* NUR spacing anpassen, NICHT die Farben überschreiben */
.code-content :deep(pre) {
  margin: 0 !important;
  padding: 1rem !important;
  background: transparent !important;
}

.code-content :deep(code) {
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}
</style>
