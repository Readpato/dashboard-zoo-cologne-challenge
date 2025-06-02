<script setup lang="ts">
import type { Animal } from '~/types'
import { ANIMAL_KEYS_ICON, ANIMAL_KEYS_LABELS, ANIMAL_MEASUREMENTS } from '~/data/constants'

const { fetchAnimal, animal } = useAnimals()

const route = useRoute()

const filteredAnimalData = computed<Omit<Animal, 'id' | 'name' | 'birthdate'> & { birthdate: number } | null>(() => {
  if (!animal.value) {
    return null
  }
  const { id, name, ...rest } = animal.value

  return {
    ...rest,
    birthdate: calculateAgeInYears(new Date(rest.birthdate)),
  }
})

onMounted(() => fetchAnimal(route.params.id as string))
</script>

<template>
  <section class="container">
    <NuxtLink
      to="/"
      class="text-sm text-gray-500 mb-3 flex items-center justify-start space-x-0.5"
    >
      <BaseIcon name="arrow-left" />
      <span class="text-sm text-gray-500">Back</span>
    </NuxtLink>
    <div v-if="animal">
      <Card class="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle>Card of {{ animal.name }}</CardTitle>
          <CardDescription>All about our lovely animal</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="w-20 m-auto flex justify-center items-center border rounded-md p-4 mb-4">
            <BaseIcon
              name="cat"
              class="text-4xl"
            />
          </div>
          <dl class="divide-y">
            <div
              v-for="(value, key) in filteredAnimalData"
              :key="key"
              class="flex text-sm justify-between py-2 first:pt-0 last:pb-0"
            >
              <dt class="font-medium text-gray-900 first-letter:capitalize flex justify-center items-center">
                <BaseIcon
                  :name="ANIMAL_KEYS_ICON[key]"
                  class="mr-2 text-gray-700"
                />
                <span>{{ ANIMAL_KEYS_LABELS[key] }}</span>
              </dt>
              <dd class="mb-2 text-gray-600 first-letter:capitalize">
                {{ value }} <span v-if="ANIMAL_MEASUREMENTS[key]">{{ ANIMAL_MEASUREMENTS[key] }}</span>
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
