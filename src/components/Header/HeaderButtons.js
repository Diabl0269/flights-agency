import React, { useState, useEffect } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import d from '../../data/dictionary'
import pageAlert from '../../utils/pageAlert'
import { Button, Typography } from '@material-ui/core'
import { useRecords } from '../../context/RecordsProvider'

export default () => {
  const { mobile } = useRecords()
  const containerIdSetter = (mobileCondition) =>
    mobileCondition ? 'mobileHeaderButtonContainer' : 'headerButtonContainer'
  const [containerId, setContainerId] = useState(containerIdSetter(mobile))
  useEffect(() => {
    setContainerId(containerIdSetter(mobile))
  }, [mobile])

  return (
    <div id={containerId}>
      <Button onClick={() => pageAlert(d('homePage'))}>
        <Typography>{d('homePage')}</Typography>
      </Button>
      <Button onClick={() => pageAlert(d('vacationPackages'))}>
        <Typography>{d('vacationPackages')}</Typography> <ArrowDropDownIcon />
      </Button>
      <Button onClick={() => pageAlert(d('flights'))}>
        <Typography>{d('flights')}</Typography> <ArrowDropDownIcon />
      </Button>
      <Button onClick={() => pageAlert(d('organizedTrips'))}>
        <Typography>{d('organizedTrips')}</Typography> <ArrowDropDownIcon />
      </Button>
      <Button onClick={() => pageAlert(d('contact'))}>
        <Typography>{d('contact')}</Typography>
      </Button>
    </div>
  )
}
