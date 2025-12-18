<script setup>
defineProps({
  number: {
    type: [Number, String],
    required: true
  }
})
</script>

<template>
  <div class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#003978] text-white font-semibold text-sm flex-shrink-0">
    {{ number }}
  </div>
</template>