import React from 'react'
import Filters from './components/Filters';
import Footer from './components/base/Footer/Footer'
import Header from './components/Header/Header'
import MobileHeader from './components/base/mobile/Header'
import Records from './components/Records'
import Sorting from './components/Sorting'
import isMobile from './utils/isMobile'
import { RecordsProvider } from './context/RecordsProvider'

export default () => {
  return (
    <div id="appContainer">
      {isMobile() ? <MobileHeader /> : <Header />}
      <RecordsProvider>
        <Filters />
        <div>
          <Sorting />
          <Records />
        </div>
      </RecordsProvider>
      <Footer />
    </div>
  )
}
