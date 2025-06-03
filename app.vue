<script setup lang="ts">
useHead({
  titleTemplate: '%s | Cologne Zoo Dashboard',
})

const headerRef = useTemplateRef('header')
const { height } = useElementBounding(headerRef)
</script>

<template>
  <AppHeader
    ref="header"
    class="sticky top-0 bg-background z-50"
  />
  <main
    class="container mx-auto p-6"
    :style="{ minHeight: `calc(100vh - ${height}px)` }"
  >
    <NuxtPage />
  </main>
</template>
