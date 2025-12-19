<script setup>
import { useSlots, computed } from 'vue'
import SectionTitle from '@components/SectionTitle.vue'
import NumberBadge from '@components/NumberBadge.vue'

const { title, size, start } = defineProps({
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'sm',
    validator: value => ['sm', 'md'].includes(value)
  },
  start: {
    type: Number,
    default: 1
  }
})

const slots = useSlots()

const items = computed(() => {
  const defaultSlot = slots.default?.() || []
  return defaultSlot.filter(vnode => vnode.type === 'li')
})
</script>

<template>
  <div class="numbered-list">
    <SectionTitle v-if="title" :text="title" class="mb-1.5" />

    <ol class="list-none pl-0 space-y-3">
      <li v-for="(item, index) in items" :key="index" class="flex gap-3">
        <div class="flex-shrink-0 pt-[0.15rem]">
          <NumberBadge :number="start + index" :size="size" />
        </div>
        <div class="flex-1 text-gray-800 leading-relaxed text-base">
          <component :is="item" />
        </div>
      </li>
    </ol>
  </div>
</template>

<style scoped>
.numbered-list :deep(.highlight) {
  color: var(--fh-orange, #f79646);
  font-weight: 600;
}

.numbered-list :deep(.subtext) {
  display: block;
  color: #9ca3af;
  font-size: 0.9rem;
  margin-top: 0.25rem;
  line-height: 1.5;
}
</style>