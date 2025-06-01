<script setup lang="ts">
defineProps<{
  icon: string
  title: string
}>()
</script>

<template>
  <div class="flex justify-start items-center space-x-1">
    <BaseIcon :name="icon" />
    <span>{{ title }}</span>
  </div>
</template>
