import { ANIMALS } from '~/data/fakeData'

export const getAnimals = () => ANIMALS

export default eventHandler((event) => {
  const id = getRouterParam(event, 'id')

  if (!id || id.trim().length === 0) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Animal ID is required',
    })
  }

  const animal = ANIMALS.find(animal => animal.id === id)

  if (!animal) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Animal not found',
    })
  }

  return animal
})
