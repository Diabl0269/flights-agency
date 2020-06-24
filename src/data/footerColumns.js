import fligtsToArray from './flightsTo.json'
import d from './dictionary'

export default [
  [d('internationalFlights'), ...fligtsToArray],
  [d('familyVacation'), ...fligtsToArray],
  [d('couplesVacation'), ...fligtsToArray],
  [d('general'), d('contact'), d('aboutUs'), d('conditions'), d('customerService')]
]
