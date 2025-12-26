<script setup>
import SectionTitle from '@components/SectionTitle.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  headers: {
    type: Array,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  caption: {
    type: String,
    default: ''
  },
  columnWidths: {
    type: Array,
    default: () => []
  }
})

const getHeaderText = header => {
  return typeof header === 'object' ? header.text : header
}

const getColumnWidth = (index, header) => {
  if (props.columnWidths && props.columnWidths[index]) {
    return props.columnWidths[index]
  }
  if (typeof header === 'object' && header.width) {
    return header.width
  }
  return 'auto'
}
</script>

<template>
  <SectionTitle v-if="title" :text="title" mb="2" />

  <table class="w-full border-collapse text-xs leading-snug text-gray-800">
    <colgroup>
      <col
        v-for="(header, index) in headers"
        :key="'col-' + index"
        :style="{ width: getColumnWidth(index, header) }"
      />
    </colgroup>
    <thead class="bg-fh-50 border-b border-gray-300">
      <tr>
        <th
          v-for="(header, index) in headers"
          :key="index"
          class="py-1 px-2 text-left font-semibold text-gray-800 text-xs border-r border-gray-300 last:border-r-0"
        >
          {{ getHeaderText(header) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        :class="rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'"
      >
        <td
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="py-1.5 px-2 align-top text-gray-700 border-r border-gray-300 last:border-r-0"
          v-html="cell"
        ></td>
      </tr>
    </tbody>
  </table>

  <p
    v-if="caption"
    class="px-2 -mt-1.5 text-xs text-gray-500 text-left leading-tight"
    v-html="caption"
  ></p>
</template>

<style scoped>
:deep(sup) {
  font-size: 0.7em;
  vertical-align: super;
}
</style>
