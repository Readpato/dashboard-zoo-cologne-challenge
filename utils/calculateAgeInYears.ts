/**
 * Calculates the age in years based on a given birthdate.
 *
 * This function computes the difference between the current date and the provided
 * birthdate, converting the result to years. The age is always rounded up using
 * Math.max() and has a minimum value of 1 year.
 *
 * @param birthdate - The birthdate as a Date object
 * @returns The calculated age in years (minimum 1)
 *
 * @example
 * ```typescript
 * const birthdate = new Date('1990-05-15');
 * const age = calculateAgeInYears(birthdate);
 * console.log(age); // e.g., 36
 * ```
 *
 * @example
 * ```typescript
 * // For someone born less than a year ago
 * const recentBirthdate = new Date('2025-05-30');
 * const age = calculateAgeInYears(recentBirthdate);
 * console.log(age); // 1 (minimum age enforced)
 */

export default (birthdate: Date) => {
  const today = new Date()
  const differenceInMilliseconds = today.getTime() - birthdate.getTime()
  const ageInYears = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  return Math.max(1, ageInYears)
}
