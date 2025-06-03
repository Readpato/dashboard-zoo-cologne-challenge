<script setup lang="ts">
useHead({
  title: 'Overview',
})

const { fetchAnimals, animals } = useAnimals()

onMounted(fetchAnimals)
</script>

<template>
  <div class="w-full">
    <h2 class="text-lg lg:text-xl">
      Our (lovely) animals
    </h2>
    <TheAnimalTable
      v-if="animals"
      :animals
    />
  </div>
</template>
