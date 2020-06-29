import React, { useState, useEffect } from 'react'
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
  const [mobile, setMobile] = useState(isMobile())

  window.onresize = (e) => {
    setMobile(isMobile(e.currentTarget.innerWidth))
  }

  const containerIdSetter = (mobileCondition) =>
    mobileCondition ? 'mobileRecordsProviderContainer' : 'recordsProviderContainer'
  const [recordsProviderId, setRecordsProviderId] = useState(containerIdSetter(mobile))
  useEffect(() => {
    setRecordsProviderId(containerIdSetter(mobile))
  }, [mobile])

  return (
    <div id="appContainer">
      <RecordsProvider mobile={mobile}>
        {mobile ? <MobileHeader /> : <Header />}
        <Container id={recordsProviderId}>
          {mobile ? <MobileFilters /> : <Filters />}
          <div id="sortingAndRecordsContainer">
            <Sorting />
            <Records />
          </div>
        </Container>
        <Footer />
      </RecordsProvider>
    </div>
  )
}
