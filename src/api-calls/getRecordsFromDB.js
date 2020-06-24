import mockDB from '../data/mockDB.json'
import { SORT_BY_DEFAULT, SORT_BY_ORDER_DEFAULT } from '../data/defaults.json'

export default (queryObj) => {
  const {
    queryScore,
    minPrice,
    maxPrice,
    sortBy = SORT_BY_DEFAULT,
    sortByOrder = SORT_BY_ORDER_DEFAULT,
    queryWithBreakfast,
    queryWithLodging
  } = queryObj

  const records = mockDB.filter((record) => {
    const { price, score, withBreakfast, withLodging } = record

    const isOverMinPrice = minPrice ? price > minPrice : true
    const isUnderMaxPrice = maxPrice ? price < maxPrice : true
    const doesMatchScore = queryScore ? score === queryScore : true
    const demandBreakfast = queryWithBreakfast ? withBreakfast : true
    const demandLodging = queryWithLodging ? withLodging : true

    return isOverMinPrice && isUnderMaxPrice && doesMatchScore && demandBreakfast && demandLodging
  })

  const isAscending = sortByOrder === 'asec'

  records.sort((record1, record2) => {
    const condition = record1[sortBy] > record2[sortBy]
    return isAscending && condition ? 1 : -1
  })

  return records
}
