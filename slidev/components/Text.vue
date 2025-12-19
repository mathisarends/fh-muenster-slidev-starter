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
  <div class="text-content">
    <SectionTitle v-if="title" :text="title" mb="1" />

    <div class="text-wrapper">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.text-wrapper {
  color: #333;
  line-height: 1.4;
  font-size: 0.95rem;
}

.text-wrapper :deep(.highlight) {
  color: #e67e00;
  font-weight: 600;
  display: inline;
}

.text-wrapper :deep(.subtext) {
  display: block;
  width: 100%;
  color: #888;
  font-size: 0.85rem;
  margin-top: 0.1rem;
  line-height: 1.3;
}
</style>
