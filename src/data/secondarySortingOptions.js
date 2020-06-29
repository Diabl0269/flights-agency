import d from './dictionary'

export default [
  {
    value: { category: 'price', order: 'asec' },
    text: `${d('price')}, ${d('fromLowestToHighest')}`
  },
  {
    value: { category: 'price', order: 'desc' },
    text: `${d('price')}, ${d('fromHighestToLowest')}`
  },
  {
    value: { category: 'rating', order: 'asec' },
    text: `${d('rating')}, ${d('fromLowestToHighest')}`
  },
  {
    value: { category: 'rating', order: 'desc' },
    text: `${d('rating')}, ${d('fromHighestToLowest')}`
  },
  { value: { category: 'mostLucrative' }, text: d('mostLucrative') }
]
