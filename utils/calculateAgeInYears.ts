export default (birthdate: Date) => {
  const today = new Date()
  const differenceInMilliseconds = today.getTime() - birthdate.getTime()
  const ageInYears = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
  return Math.max(1, ageInYears)
}
