<script setup lang="ts">
const { animals } = useAnimals()
</script>

<template>
  <AppHeader />
  <main class="container mx-auto p-6">
    <h2 class="text-lg lg:text-xl">
      Our (lovely) animals
    </h2>
    <TheAnimalTable
      v-if="animals"
      :animals
    />
  </main>
</template>
