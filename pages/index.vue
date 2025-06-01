<script setup lang="ts">
const { animals } = useAnimals()
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
