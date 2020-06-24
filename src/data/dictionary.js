import dictionary from './dictionary.json'

//Can add language options to website for a multi languages website
const lng = 'he'

export default (string) => dictionary[string][lng]
