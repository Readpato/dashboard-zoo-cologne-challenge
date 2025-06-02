import type { Animal } from '~/types'

export const ANIMAL_KEYS_LABELS: Record<keyof Animal, string> = {
  birthdate: 'Age',
  favouriteFruit: 'Favourite Fruit',
  gender: 'Gender',
  height: 'Height',
  id: 'ID',
  name: 'Name',
  species: 'Species',
  weight: 'Weight',
} as const

export const ANIMAL_KEYS_ICON: Record<keyof Animal, string> = {
  birthdate: 'cake',
  favouriteFruit: 'apple',
  gender: 'transgender',
  height: 'ruler',
  id: 'key',
  name: 'id-card',
  species: 'leaf',
  weight: 'weight',
} as const

export const ANIMAL_MEASUREMENTS: {
  [K in keyof Animal]: K extends 'height' | 'weight' | 'birthdate' ? string : null
} = {
  birthdate: 'year(s)',
  favouriteFruit: null,
  gender: null,
  height: 'cm',
  id: null,
  name: null,
  species: null,
  weight: 'kg',
} as const
