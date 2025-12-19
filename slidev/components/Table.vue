<script setup>
import SectionTitle from '@components/SectionTitle.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  headers: {
    type: Array,
    required: true
    // Format: ['Column 1', 'Column 2']
  },
  rows: {
    type: Array,
    required: true
    // Format: [['Cell 1', 'Cell 2'], ['Cell 3', 'Cell 4']]
  },
  caption: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="table-component">
    <SectionTitle v-if="title" :text="title" mb="2" />

    <table class="data-table">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" v-html="cell"></td>
        </tr>
      </tbody>
    </table>

    <p v-if="caption" class="table-caption" v-html="caption"></p>
  </div>
</template>

<style scoped>
.table-component {
  margin: 1rem 0;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;
  line-height: 1.4;
  color: #333;
}

.data-table thead {
  background: var(--fh-blue, #0066b3);
  border-bottom: 2px solid white;
}

.data-table th {
  padding: 0.25rem 0.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.85rem;
  color: white;
}

.data-table td {
  padding: 0.25rem 0.5rem;
  vertical-align: top;
  color: #333;
  border: none;
}

.data-table tbody tr:nth-child(odd) {
  background: #f8f9fa;
}

.data-table tbody tr:nth-child(even) {
  background: white;
}

.table-caption {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #666;
  text-align: center;
}

.table-caption :deep(sup) {
  font-size: 0.7em;
  vertical-align: super;
}

.data-table tbody tr:nth-child(odd) {
  background: #f8f9fa;
}

.data-table tbody tr:nth-child(even) {
  background: white;
}

.table-caption {
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #666;
  text-align: center;
}

.table-caption :deep(sup) {
  font-size: 0.7em;
  vertical-align: super;
}
</style>
