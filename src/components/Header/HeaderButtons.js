import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import d from '../../data/dictionary'
import pageAlert from '../../utils/pageAlert'
import { Button, Typography } from '@material-ui/core'

export default () => {
  return (
    <div id="headerButtonContainer">
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
