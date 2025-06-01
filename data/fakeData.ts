import type { Animal, Fruit, Gender } from '~/types'
import { faker } from '@faker-js/faker'

export const AARON: Animal = {
  birthdate: new Date(),
  favouriteFruit: 'cherry',
  gender: 'male',
  height: 150,
  id: faker.string.uuid(),
  name: 'Aaron',
  species: 'dog',
  weight: 150,
}

export const fakeAnimal = (): Animal => {
  const gender = faker.helpers.arrayElement(['male', 'female']) satisfies Gender
  const favouriteFruit = faker.helpers.arrayElement(['banana', 'apple', 'cherry']) satisfies Fruit

  return {
    birthdate: faker.date.past({ years: 25 }),
    favouriteFruit,
    gender,
    height: faker.number.float({
      min: 0.25,
      max: 4,
      multipleOf: 0.01,
    }),
    id: faker.string.uuid(),
    name: faker.person.firstName(gender),
    species: faker.animal.type(),
    weight: faker.number.float({
      min: 20,
      max: 250,
      multipleOf: 0.1,
    }),
  }
}
