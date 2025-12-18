<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="bulleted-list my-4">
    <!-- Titel mit Unterstrich -->
    <h3 v-if="title" class="text-[#0066b3] text-lg font-medium mb-3 underline decoration-1 underline-offset-4">
      {{ title }}
    </h3>
    
    <!-- Bullet Items -->
    <ul class="list-none pl-0 space-y-3">
      <slot />
    </ul>
  </div>
</template>

<style scoped>
.bulleted-list :deep(li) {
  position: relative;
  padding-left: 1.25rem;
  color: #333;
}

.bulleted-list :deep(li)::before {
  content: "▪";
  position: absolute;
  left: 0;
  color: #333;
  font-size: 0.8em;
}

/* Haupttext */
.bulleted-list :deep(li > span),
.bulleted-list :deep(li > p) {
  display: block;
}

/* Orange hervorgehobene Begriffe */
.bulleted-list :deep(.highlight) {
  color: #e67e00;
}

/* Grauer Subtext */
.bulleted-list :deep(.subtext) {
  display: block;
  color: #888;
  font-size: 0.9em;
  margin-top: 0.15rem;
}
</style>
