import React, { useState } from 'react'
import { AppBar, List, Drawer, Slide } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderLogo from '../../Header/HeaderLogo'
import HeaderButtons from '../../Header/HeaderButtons'

export default () => {
  const [open, setOpen] = useState()

  const toggleDrawer = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(!open)
  }

  return (
    <AppBar id="headerContainer">
      <MenuIcon onClick={toggleDrawer} />

      <Drawer open={open} onClose={toggleDrawer} anchor={'right'}>
        <Slide direction="left" in={open} mountOnEnter unmountOnExit>
          <div onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            <List>
              <HeaderButtons />
            </List>
          </div>
        </Slide>
      </Drawer>

      <HeaderLogo />
    </AppBar>
  )
}
