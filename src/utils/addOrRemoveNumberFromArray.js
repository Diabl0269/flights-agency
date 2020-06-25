export default (array, number) =>
  array.includes(number) ? array.filter((arrNum) => arrNum !== number) : array.concat(number)
