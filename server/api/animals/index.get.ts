import { ANIMALS } from '~/data/fakeData'

export const getAnimals = () => ANIMALS

export default eventHandler(() => {
  return getAnimals()
})
