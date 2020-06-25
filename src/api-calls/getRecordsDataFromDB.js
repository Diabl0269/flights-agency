import mockDB from '../data/mockDB.json'
import calculateNumOfNights from '../utils/calculateNumOfNights'

export default (queryObj) => {
  console.log(queryObj)
  const {
    ratings,
    priceEdges: [minPrice, maxPrice],
    sortBy,
    queryWithBreakfast,
    queryWithLodging,
    queryHotelName
  } = queryObj

  let lowestPrice, highestPrice

  const setEdgePrices = (price) => {
    if (!lowestPrice || price < lowestPrice) lowestPrice = price
    if (!highestPrice || price > highestPrice) highestPrice = price
  }

  const records = mockDB.filter((record) => {
    const { price, rating, withBreakfast, withLodging, hotelName } = record

    setEdgePrices(price)
    const isOverMinPrice = minPrice ? price >= minPrice : true

    const isUnderMaxPrice = maxPrice ? price <= maxPrice : true
    const doesMatchRating = ratings.length > 0 && ratings.includes(rating)
    const demandBreakfast = queryWithBreakfast ? withBreakfast : true
    const demandLodging = queryWithLodging ? withLodging : true
    const matchHotelName = hotelName.toLowerCase().includes(queryHotelName.toLowerCase())

    return (
      isOverMinPrice &&
      isUnderMaxPrice &&
      doesMatchRating &&
      demandBreakfast &&
      demandLodging &&
      matchHotelName
    )
  })

  const { category, order } = sortBy
  const isAscending = order === 'asec'

  records.sort((record1, record2) => {
    if (category === 'mostLucrative') {
      const numOfNights1 = calculateNumOfNights(record1.departure, record1.return)
      const value1 = record1.price / numOfNights1
      const numOfNights2 = calculateNumOfNights(record2.departure, record2.return)
      const value2 = record2.price / numOfNights2
      return value1 > value2 ? 1 : -1
    }

    const condition = record1[category] > record2[category]
    
    return isAscending ? (condition ? 1 : -1) : condition ? -1 : 1
  })
  return { records, priceEdges: [lowestPrice, highestPrice] }
}
