<script setup>
import Item from './Item.vue'
import Divider from '@components/Divider.vue'

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
      <Item v-for="item in items" :key="item.number" :number="item.number" :text="item.text" />
    </div>
  </div>
</template>
