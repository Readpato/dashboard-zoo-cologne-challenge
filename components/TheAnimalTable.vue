<script lang="ts" setup>
import type { SortingState } from '@tanstack/vue-table'
import type { Animal } from '~/types'
import { BaseTableActions, BaseTableHeaderIcon } from '#components'
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
    header: () => h(BaseTableHeaderIcon, { icon: 'leaf', title: 'Species' }),
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => h(BaseTableHeaderIcon, { icon: 'id-card', title: 'Name' }),
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('gender', {
    header: () => h(BaseTableHeaderIcon, { icon: 'transgender', title: 'Gender' }),
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('birthdate', {
    header: () => h(BaseTableHeaderIcon, { icon: 'cake', title: 'Age' }),
    cell: info => calculateAgeInYears(new Date(info.getValue())),
  }),
  columnHelper.accessor('weight', {
    header: () => h(BaseTableHeaderIcon, { icon: 'weight', title: 'Weight' }),
    cell: info => info.getValue(),
  }),
  columnHelper.display({
    id: 'actions',
    cell: () => h(BaseTableActions),
  }),
])

const table = useVueTable({
  get data() {
    return animals
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
  <Table>
    <TableHeader>
      <TableRow
        v-for="headerGroup in table.getHeaderGroups()"
        :key="headerGroup.id"
      >
        <TableHead
          v-for="header in headerGroup.headers"
          :key="header.id"
          :col-span="header.colSpan"
          class="text-xs"
        >
          <FlexRender
            v-if="!header.isPlaceholder"
            :render="header.column.columnDef.header"
            :props="header.getContext()"
          />
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="row in table.getRowModel().rows"
        :key="row.id"
        class="cursor-pointer"
        @click="$router.push(`/animals/${row.original.id}`)"
      >
        <TableCell
          v-for="cell in row.getVisibleCells()"
          :key="cell.id"
          class="first-letter:uppercase"
          :class="{ 'w-10': cell.column.id === 'actions' }"
        >
          <FlexRender
            :render="cell.column.columnDef.cell"
            :props="cell.getContext()"
          />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
