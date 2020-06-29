const { innerWidth } = window
const mobileSize = 1100
export default (size) => size ? size < mobileSize : innerWidth < mobileSize
