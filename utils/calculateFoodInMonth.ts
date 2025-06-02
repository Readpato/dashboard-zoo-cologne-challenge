import type { Animal } from '~/types'

export default (animalRef: MaybeRefOrGetter<Animal>) => {
  const animal = toValue(animalRef)
  const age = calculateAgeInYears(new Date(animal.birthdate))

  let requiredFood = (animal.height + animal.weight) / 250

  if (age > 20) {
    requiredFood += requiredFood / 2
  } else if (age < 2) {
    requiredFood += requiredFood * 2
  }

  if (animal.favouriteFruit === 'cherry') {
    requiredFood += requiredFood + 28
  }

  if (animal.gender === 'male') {
    requiredFood += requiredFood * 0.2
  }

  if (animal.species === 'fish') {
    requiredFood = 0
  }

  return Math.ceil(requiredFood * 30)
}
