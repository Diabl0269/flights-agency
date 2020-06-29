import React from 'react'
import Filters from './components/filters/Filters'
import Footer from './components/base/Footer/Footer'
import Header from './components/Header/Header'
import MobileHeader from './components/base/mobile/Header'
import Records from './components/Records'
import Sorting from './components/Sorting'
import isMobile from './utils/isMobile'
import { RecordsProvider } from './context/RecordsProvider'
import { Container } from '@material-ui/core'
import MobileFilters from './components/filters/MobileFilters'

export default () => {
  const recordsProviderClassName = isMobile()
    ? 'mobileRecordsProviderContainer'
    : 'recordsProviderContainer'

  return (
    <div id="appContainer">
      <RecordsProvider>
        {isMobile() ? <MobileHeader /> : <Header />}
        <Container id={recordsProviderClassName}>
          {isMobile() ? <MobileFilters /> : <Filters />}
          <div id='sortingAndRecordsContainer'>
            <Sorting />
            <Records />
          </div>
        </Container>
      </RecordsProvider>
      <Footer />
    </div>
  )
}
