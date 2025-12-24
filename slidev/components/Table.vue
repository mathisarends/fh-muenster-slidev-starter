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
    // Format: ['60%', '40%'] or ['200px', '300px']
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

  <table class="w-full border-collapse text-sm leading-relaxed text-gray-800">
    <colgroup>
      <col
        v-for="(header, index) in headers"
        :key="'col-' + index"
        :style="{ width: getColumnWidth(index, header) }"
      />
    </colgroup>
    <thead class="bg-fh-blue border-b-2 border-white">
      <tr>
        <th
          v-for="(header, index) in headers"
          :key="index"
          class="py-1 px-3 text-left font-semibold text-white text-sm"
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
          class="py-1.5 px-3 align-top text-gray-700"
          v-html="cell"
        ></td>
      </tr>
    </tbody>
  </table>

  <p
    v-if="caption"
    class="mt-2 px-3 text-xs text-gray-500 text-left leading-tight"
    v-html="caption"
  ></p>
</template>

<style scoped>
:deep(sup) {
  font-size: 0.7em;
  vertical-align: super;
}
</style>
