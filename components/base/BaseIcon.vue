<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <Icon :name="`lucide:${name}`" />
</template>
