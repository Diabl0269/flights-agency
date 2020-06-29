import React from 'react'
import { Divider } from '@material-ui/core'
import Ratings from './Ratings'
import PriceRange from './PriceRange'
import BaseHosting from './BaseHosting'
import HotelSearchBar from './HotelSearchBar'

export default () => {
  return (
    <div id="filtersDataContainer" key={'filtersDataContainer'}>
      <Ratings />
      <Divider id="filtersDivider" variant="middle" />

      <PriceRange />
      <Divider id="filtersDivider" variant="middle" />

      <BaseHosting />
      <Divider id="filtersDivider" variant="middle" />

      <HotelSearchBar />
    </div>
  )
}
