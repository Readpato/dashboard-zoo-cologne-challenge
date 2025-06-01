<script setup lang="ts">
const { fetchAnimal, animal } = useAnimals()

const route = useRoute()

onMounted(() => fetchAnimal(route.params.id as string))
</script>

<template>
  <section>
    <NuxtLink to="/">
      Back
    </NuxtLink>
    <div>{{ animal }}</div>
  </section>
</template>
