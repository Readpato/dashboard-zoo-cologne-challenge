<script lang="ts" setup>
import type { SortingState } from '@tanstack/vue-table'
import type { Animal } from '~/types'
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  getSortedRowModel,
  useVueTable,
} from '@tanstack/vue-table'

const { animals } = defineProps<{
  animals: Animal[]
}>()

const sorting = shallowRef<SortingState>([{ id: 'name', desc: false }])

const columnHelper = createColumnHelper<Animal>()

const columns = computed(() => [
  columnHelper.display({
    id: 'index',
    header: '#',
    cell: ({ row, table }) => ((table.getSortedRowModel()?.flatRows?.findIndex(flatRow => flatRow.id === row.id) || 0) + 1),
  }),
  columnHelper.accessor('species', {
    header: 'Species',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: 'Name',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('gender', {
    header: 'Gender',
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('birthdate', {
    header: 'Age',
    cell: info => calculateAgeInYears(new Date(info.getValue())),
  }),
  columnHelper.accessor('weight', {
    header: 'Weight',
    cell: info => info.getValue(),
  }),
])

const table = useVueTable({
  get data() {
    return computed(() => animals)
  },
  columns: columns.value,
  state: {
    get sorting() {
      return sorting.value
    },
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
})
</script>

<template>
  <table>
    <thead>
      <tr
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
      >
        <th
          v-for="header in headerGroup.headers"
          :key="header.id"
          :colSpan="header.colSpan"
        >
          <FlexRender
            v-if="!header.isPlaceholder"
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in table.getRowModel().rows"
        :key="row.id"
      >
        <td
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
/* table {
  @apply table-auto w-full text-left
}

td {
  @apply w-40
}

tr {
  @apply border-b-2
}

tbody tr {
  @apply hover:bg-gray-200
} */
</style>
