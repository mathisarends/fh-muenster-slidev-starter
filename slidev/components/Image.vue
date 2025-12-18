<script setup>
import SectionTitle from './SectionTitle.vue'

defineProps({
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
</script>

<template>
  <div class="image-component">
    <SectionTitle v-if="title" :text="title" mb="2" />
    
    <div class="image-wrapper" :style="{ maxWidth: maxWidth }">
      <img 
        :src="src" 
        :alt="alt" 
        :style="{ width: width }"
        class="image"
      />
      
      <div v-if="caption || source" class="image-footer">
        <p v-if="caption" class="caption">{{ caption }}</p>
        <p v-if="source" class="source">{{ source }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-component {
  margin: 1rem 0;
}

.image-wrapper {
  display: inline-block;
}

.image {
  display: block;
  height: auto;
}

.image-footer {
  margin-top: 0.5rem;
}

.caption {
  color: #333;
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0 0 0.25rem 0;
}

.source {
  color: #888;
  font-size: 0.75rem;
  font-style: italic;
  margin: 0;
}
</style>