<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="inline-block max-w-sm bg-gray-50 border-t-4 border-t-gray-300">
    <div class="px-3 py-2.5">
      <h3 class="text-fh-blue text-sm font-semibold mb-1 leading-tight">
        {{ title }}
      </h3>
      <div class="text-gray-700 text-xs leading-tight">
        <slot />
      </div>
    </div>
  </div>
</template>
