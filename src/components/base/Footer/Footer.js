import React, { useState, useEffect } from 'react'
import UpperFooter from './UpperFooter'
import BottomFooter from './BottomFooter'
import { useRecords } from '../../../context/RecordsProvider'

export default () => {
  const { mobile } = useRecords()
  const containerIdSetter = (mobileCondition) =>
    mobileCondition ? 'mobileFooterContainer' : 'footerContainer'
  const [containerId, setContainerId] = useState(containerIdSetter(mobile))
  useEffect(() => {
    setContainerId(containerIdSetter(mobile))
  }, [mobile])

  return (
    <div id={containerId}>
      <UpperFooter />
      <BottomFooter />
    </div>
  )
}
