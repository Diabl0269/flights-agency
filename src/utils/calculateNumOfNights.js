export default (departureDate, returnDate) => {
  const departureDay = parseInt(departureDate.substring(0, 2))
  const returnDay = parseInt(returnDate.substring(0, 2))

  return returnDay - departureDay
}
