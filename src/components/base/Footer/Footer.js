import React from 'react'
import UpperFooter from './UpperFooter'
import BottomFooter from './BottomFooter'
import isMobile from '../../../utils/isMobile'

export default () => {
  const containerId = isMobile() ? 'mobileFooterContainer' : 'footerContainer'

  return (
    <div id={containerId}>
      <UpperFooter />
      <BottomFooter />
    </div>
  )
}
