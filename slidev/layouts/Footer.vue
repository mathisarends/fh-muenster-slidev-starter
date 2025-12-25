<script setup>
const info = $slidev.configs?.presentationInfo || {
  title: '',
  subtitle: ''
}

defineProps({
  chapter: {
    type: String,
    default: ''
  },
  section: {
    type: String,
    default: ''
  },
  currentPage: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    class="footer-container relative flex justify-between items-center py-1 px-8 -mx-8 -mb-4 mt-2"
  >
    <div class="bg-gray-50 px-3 py-0.5 rounded-lg text-gray-600 text-[11px] relative z-10">
      <span v-if="!chapter">{{ info.title }} - {{ info.subtitle }}</span>
      <span v-else>{{ info.subtitle }}</span>
      <span v-if="section"> | {{ section }}</span>
    </div>
    <span class="bg-gray-50 px-3 py-0.5 rounded-lg text-gray-600 text-[11.5px] relative z-10">
      {{ currentPage - 1 }}
    </span>
  </div>
</template>

<style scoped>
.footer-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/images/footer-background.png');
  background-repeat: repeat-x;
  background-size: auto 100%;
  background-position: center;
  filter: grayscale(0.8) opacity(0.4) blur(0.5px);
  z-index: 0;
}
</style>