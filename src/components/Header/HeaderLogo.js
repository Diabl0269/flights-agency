import React from 'react'
import logo from '../../media/logo.svg'
import { Typography } from '@material-ui/core'
import d from '../../data/dictionary'

export default () => {
  return (
    <div id="siteLogoContainer">
      <Typography>USD $</Typography>
      <img alt={d('plane')} src={logo} />
    </div>
  )
}
