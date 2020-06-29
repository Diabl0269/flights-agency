import React from 'react'
import image from '../media/mockResortPicture.jpg'
import { Typography, Divider, Button } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import d from '../data/dictionary'
import pageAlert from '../utils/pageAlert'
import numWithCommas from '../utils/numWithCommas'
import calculateNumOfNights from '../utils/calculateNumOfNights'

export default ({ record }) => {
  const {
    departure: departureDate,
    departureTime,
    return: returnDate,
    returnTime,
    hotelName,
    rating,
    price,
    withLodging,
    withBreakfast
  } = record

  const numOfNights = calculateNumOfNights(departureDate, returnDate)

  const displayPrice = numWithCommas(price)

  const commoditiesText = withLodging
    ? withBreakfast
      ? 'allIncluded'
      : 'onlyRoom'
    : 'onlyBreakfast'

  console.log(commoditiesText)
  const TravelTimeContainer = ({ date, time, text }) => (
    <div id="travelTimeContainer">
      <Typography id="title">{`${d(text)}:`}</Typography>
      <Typography>{`${date}`}</Typography>
      <Divider flexItem id="divider" orientation="vertical" />
      <Typography>{`${time}`}</Typography>
    </div>
  )

  return (
    <div id="listItemContainer">
      <img src={image} alt="mock-resort-picture" />

      <div id="mainDataContainer">
        <div id="mainData">
          <Typography id="hotelName">{hotelName}</Typography>

          <Rating value={rating} id="ratingContainer" readOnly />

          <TravelTimeContainer text={'exit'} date={departureDate} time={departureTime} />
          <TravelTimeContainer text={'return'} date={returnDate} time={returnTime} />

          <div id="nightsAndAccommodationContainer">
            <Typography>{`${numOfNights} ${d('nights')}`}</Typography>
            <Divider flexItem id="divider" orientation="vertical" />
            <Typography>{d(commoditiesText)}</Typography>
          </div>
        </div>

        <div id="morePackagesButtonContainer">
          <Button onClick={() => pageAlert(d('morePackagesToThisHotel'))}>
            {d('morePackagesToThisHotel')}
          </Button>
        </div>
      </div>

      <div id="additionalDataContainer">
        <Typography id="priceContainer">{`$${displayPrice}`}</Typography>
        <Typography id="priceDescriptionContainer">
          {d('averagePriceForPersonInDuoRoom')}
        </Typography>
        <Button onClick={() => pageAlert(d('moreDetails'))}>{d('moreDetails')}</Button>
      </div>
    </div>
  )
}
