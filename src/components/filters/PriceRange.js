import React, { useState } from 'react'
import d from '../../data/dictionary'
import { useRecords } from '../../context/RecordsProvider'
import { Typography, Slider } from '@material-ui/core'

export default () => {
  const {
    recordsData: { priceEdges },
    alterQueryObj
  } = useRecords()

  const [value, setValue] = useState([0, Infinity])

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const getRecords = (e, newValue) => {
    alterQueryObj({ change: newValue, category: 'priceEdges' })
  }

  return (
    <div id="priceRangeContainer">
      <Typography id="priceRangeTitle">{d('priceRangeForPerson')}</Typography>
      <div id="sliderContainer">
        <div id="edgeValuesContainer">
          <Typography>{priceEdges[1]}</Typography>
          <Typography>{priceEdges[0]}</Typography>
        </div>
        <Slider
          value={value}
          min={priceEdges[0]}
          max={priceEdges[1]}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          onChange={handleChange}
          onChangeCommitted={getRecords}
        />
      </div>
    </div>
  )
}
