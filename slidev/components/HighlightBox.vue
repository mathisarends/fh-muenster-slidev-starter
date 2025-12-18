<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="inline-block max-w-sm">
    <div class="h-1.5 bg-[#ff8c00]"></div>
    <div class="px-3 py-2">
      <h3 class="text-[#0066b3] text-base font-semibold mb-1">
        {{ title }}
      </h3>
      <div class="text-[#333] text-xs">
        <slot />
      </div>
    </div>
  </div>
</template>