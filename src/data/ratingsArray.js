import { MAX_RATINGS } from './defaults.json'

export default Array.from(Array(MAX_RATINGS), (_, i) => i + 1)
