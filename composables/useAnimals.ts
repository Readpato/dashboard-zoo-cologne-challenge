import type { Animal } from '~/types'

const animals = ref<Animal[]>([])
const animal = ref<Animal | null>(null)

export default () => {
  const fetchAnimals = async (): Promise<Animal[]> => {
    animals.value = await $fetch('/api/animals')
    return animals.value
  }

  const fetchAnimal = async (id: string): Promise<Animal | null> => {
    animal.value = await $fetch(`/api/animals/${id}`)
    return animal.value
  }

  return {
    animal,
    animals,
    fetchAnimal,
    fetchAnimals,
  }
}
