<script setup>
import SectionTitle from '@components/SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: 'Quellen'
  },
  citations: {
    type: Array,
    default: () => []
    // Format: [{ id: '[GeT23]', text: 'Geis, T.; Tesch, G.: Basiswissen...' }]
  }
})
</script>

<template>
  <div class="citation-table">
    <div class="orange-bar"></div>
    <div class="content">
      <SectionTitle :text="title" />

      <div class="citations">
        <div v-for="(citation, index) in citations" :key="index" class="citation-item">
          <div class="citation-id">{{ citation.id }}</div>
          <div class="citation-text" v-html="citation.text"></div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.citation-table {
  margin-top: 2rem;
}

.orange-bar {
  height: 3px;
  background: #ff8c00;
  margin-bottom: 0.75rem;
}

.content {
  /* No extra padding needed */
}

.citations {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.citation-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  font-size: 0.8rem;
  line-height: 1.4;
}

.citation-id {
  color: #333;
  font-weight: 500;
  white-space: nowrap;
}

.citation-text {
  color: #333;
}

.citation-text :deep(em) {
  font-style: italic;
}

.citation-text :deep(strong) {
  font-weight: 600;
}
</style>
