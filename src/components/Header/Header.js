import React from 'react'
import { AppBar } from '@material-ui/core'
import HeaderButtons from './HeaderButtons'
import HeaderLogo from './HeaderLogo'

export default () => {
  return (
    <AppBar id="headerContainer">
      <HeaderButtons />
      <HeaderLogo />
    </AppBar>
  )
}
