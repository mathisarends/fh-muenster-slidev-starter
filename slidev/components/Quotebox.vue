<script setup>
defineProps({
  source: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="quotebox bg-gray-100 border-l-4 border-[#0066b3] py-3 px-4 my-4 relative">
    <p class="text-gray-700 text-base leading-normal m-0 pr-24">
      <slot />
    </p>
    <span v-if="source" class="absolute bottom-3 right-4 text-gray-500 text-sm">
      {{ source }}
    </span>
  </div>
</template>

<style scoped>
.quotebox {
  font-style: italic;
}
</style>
