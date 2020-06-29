import React, { useState } from 'react'
import { Typography, Radio } from '@material-ui/core'
import d from '../../data/dictionary'
import { Rating } from '@material-ui/lab'
import ratingsArray from '../../data/ratingsArray'
import { useRecords } from '../../context/RecordsProvider'

export default () => {
  const {
    alterQueryObj,
    queryObj: { ratings },
    recordsData: {
      priceEdges: [lowestPrice]
    }
  } = useRecords()

  const clickHandler = (checked, setChecked, rating) => {
    setChecked(!checked)
    alterQueryObj({ change: rating, category: 'ratings' })
  }

  const RadioButton = ({ rating }) => {
    const isChecked = ratings.includes(rating)
    const [checked, setChecked] = useState(isChecked)

    return (
      <Radio
        id="radioButton"
        checked={checked}
        onClick={() => clickHandler(checked, setChecked, rating)}
      />
    )
  }

  const LowestPrice = () => <Typography>{lowestPrice}</Typography>

  return (
    <div id="filtersRatingContainer">
      <Typography id="filtersRatingTitle">{d('hotelScore')}</Typography>
      <div id="ratingsContainer">
        {ratingsArray.map((rating, index) => (
          <div key={`${rating}${index}`} id="ratingContainer">
            <RadioButton rating={rating} />
            <Rating readOnly value={rating} id='rating' />
            <LowestPrice />
          </div>
        ))}
      </div>
    </div>
  )
}
