import React, { useState } from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import FiltersData from './FiltersData'
import { Typography, Container } from '@material-ui/core'
import d from '../../data/dictionary'
import Collapse from 'react-css-collapse'

export default () => {
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(!open)
  }

  return (
    <Container id="mobileFiltersContainer">
      <div id="filtersTitleContainer" onClick={clickHandler}>
        <Typography>{d('filterResults')}</Typography>
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </div>

      <Collapse isOpen={open}>
        <FiltersData />
      </Collapse>
    </Container>
  )
}
