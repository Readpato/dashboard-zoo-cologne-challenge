<script lang="ts" setup>
import type { Animal } from '~/types'
import { computed } from 'vue'

const { animals } = defineProps<{
  animals: Animal[]
}>()

const animalsSortedByName = computed(() =>
  animals.slice().map(animal => ({
    ...animal,
    age: calculateAgeInYears(new Date(animal.birthdate)),
  })).sort((animalA, animalB) => {
    return animalA.name.localeCompare(animalB.name, 'en', { sensitivity: 'base' })
  }),
)
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Index</th>
        <th>Species</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age (yrs)</th>
        <th>Weight (kg)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="({ age, species, gender, weight, name, id }, animalIndex) in animalsSortedByName" :key="id">
        <td>{{ animalIndex + 1 }}</td>
        <td>{{ species }}</td>
        <td>{{ name }}</td>
        <td>{{ gender }}</td>
        <td>{{ age }}</td>
        <td>{{ weight }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
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
}
</style>
