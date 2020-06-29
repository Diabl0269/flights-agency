import React from 'react'
import { Typography, Container } from '@material-ui/core'
import d from '../../data/dictionary'
import FiltersData from './FiltersData'

export default () => {
  return (
    <Container id="filtersContainer">
      <div id="filtersTitleContainer">
        <Typography>{d('filterResults')}</Typography>
      </div>

      <FiltersData />
    </Container>
  )
}
