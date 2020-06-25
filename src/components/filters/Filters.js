import React from 'react'
import { Typography, Container, Divider } from '@material-ui/core'
import d from '../../data/dictionary'
import Ratings from './Ratings'
import PriceRange from './PriceRange';
import BaseHosting from './BaseHosting';
import HotelSearchBar from './HotelSearchBar';

export default () => {
  return (
    <Container id="filtersContainer">
      <div id="filtersTitleContainer">
        <Typography>{d('filterResults')}</Typography>
      </div>

      <div id="filtersDataContainer">
        <Ratings />
        <Divider id='filtersDivider' variant="middle" />

        <PriceRange />
        <Divider id='filtersDivider' variant="middle" />

        <BaseHosting />
        <Divider id='filtersDivider' variant="middle" />

        <HotelSearchBar />
      </div>
    </Container>
  )
}
