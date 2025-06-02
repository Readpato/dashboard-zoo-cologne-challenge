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
import { ANIMAL_KEYS_ICON, ANIMAL_KEYS_LABELS, ANIMAL_MEASUREMENTS } from '~/data/constants'

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
    header: () => h(BaseTableHeaderIcon, {
      icon: ANIMAL_KEYS_ICON.species,
      title: ANIMAL_KEYS_LABELS.species,
    }),
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => h(BaseTableHeaderIcon, {
      icon: ANIMAL_KEYS_ICON.name,
      title: ANIMAL_KEYS_LABELS.name,
    }),
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('gender', {
    header: () => h(BaseTableHeaderIcon, {
      icon: ANIMAL_KEYS_ICON.gender,
      title: ANIMAL_KEYS_LABELS.gender,
    }),
    cell: info => info.getValue(),
  }),
  columnHelper.accessor('birthdate', {
    header: () => h(BaseTableHeaderIcon, {
      icon: ANIMAL_KEYS_ICON.birthdate,
      title: ANIMAL_KEYS_LABELS.birthdate,
    }),
    cell: info => `${calculateAgeInYears(new Date(info.getValue()))} ${ANIMAL_MEASUREMENTS.birthdate}`,
  }),
  columnHelper.accessor('weight', {
    header: () => h(BaseTableHeaderIcon, {
      icon: ANIMAL_KEYS_ICON.weight,
      title: ANIMAL_KEYS_LABELS.weight,
    }),
    cell: info => `${info.getValue()} ${ANIMAL_MEASUREMENTS.weight}`,
  }),
  columnHelper.display({
    id: 'requiredFood',
    header: () => h(BaseTableHeaderIcon, {
      icon: 'beef',
      title: 'Monthly Food',
    }),
    cell: ({ row }) => `${calculateFoodInMonth(row.original)} ${ANIMAL_MEASUREMENTS.weight}`,
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
