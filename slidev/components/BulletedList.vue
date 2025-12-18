<script setup>
import SectionTitle from './SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bulleted-list">
    <SectionTitle v-if="title" :text="title" mb="1" />
    
    <ul class="list-none pl-0 space-y-1.5">
      <slot />
    </ul>
  </div>
</template>

<style scoped>
.bulleted-list :deep(li) {
  position: relative;
  padding-left: 1.25rem;
  color: #333;
  line-height: 1.4;
  font-size: 0.95rem;
  margin: 0;
}

.bulleted-list :deep(li)::before {
  content: "■";
  position: absolute;
  left: 0;
  top: 0.2rem;
  color: #0066b3;
  font-size: 0.35em;
}

.bulleted-list :deep(li) {
  display: block;
}

.bulleted-list :deep(li)::before {
  flex-shrink: 0;
  margin-right: 0.5rem;
  margin-top: 0.15rem;
}

.bulleted-list :deep(.highlight) {
  color: #e67e00;
  font-weight: 600;
  display: inline;
}

.bulleted-list :deep(.subtext) {
  display: block;
  width: 100%;
  color: #888;
  font-size: 0.85rem;
  margin-top: 0.1rem;
  line-height: 1.3;
}
</style>