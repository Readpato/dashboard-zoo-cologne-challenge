import { faker } from '@faker-js/faker'

import { describe, expect, it } from 'vitest'

describe('the calculateAgeInYears util', () => {
  it('handles over 100 years correctly', () => {
    const date = faker.date.between({
      from: '1800-01-01T00:00:00.000Z',
      to: '1900-01-01T00:00:00.000Z',
    })
    expect(calculateAgeInYears(date)).toBeGreaterThanOrEqual(100)
  })

  // For the zookeepers its easier to conservatively assume that an animal is older rather than younger
  it('always rounds up', () => {
    const today = new Date()
    expect(calculateAgeInYears(today)).toBe(1)
  })
})
