<script setup>
import Item from './Item.vue'
import Divider from '../../components/Divider.vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  },
  dividerLength: {
    type: [String, Number],
    default: 100
  }
})
</script>

<template>
  <div class="footnote-list mt-2">
    <Divider :length="dividerLength" class="mb-2" />
    <div class="space-y-0.5">
      <Item 
        v-for="(item, index) in items" 
        :key="index"
        :number="index + 1"
        :text="item"
      />
      <slot />
    </div>
  </div>
</template>

<style scoped>
/* Footnote Liste mit Items */
</style>
