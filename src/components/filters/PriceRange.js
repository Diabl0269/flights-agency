import React, { useState, useEffect } from 'react'
import d from '../../data/dictionary'
import { useRecords } from '../../context/RecordsProvider'
import { Typography, Slider } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

export default () => {
  const {
    recordsData: { priceEdges },
    alterQueryObj,
    queryObj: { priceEdges: queryPriceEdges }
  } = useRecords()

  const [showAlert, setShowAlert] = useState(false)
  const [value, setValue] = useState([0, Infinity])

  const handleChange = (e, newValue) => {
    if (newValue[0] > newValue[1]) return setShowAlert(true)

    setShowAlert(false)
    setValue(newValue)
  }
  const getRecords = (e, newValue) => {
    alterQueryObj({ change: newValue, category: 'priceEdges' })
  }

  return (
    <div id="priceRangeContainer">
      <Typography id="priceRangeTitle">{d('priceRangeForPerson')}</Typography>
      <div id="sliderContainer">
        <Slider
          value={value}
          min={priceEdges[0]}
          max={priceEdges[1]}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          onChange={handleChange}
          onChangeCommitted={getRecords}
        />
        {showAlert && <Alert severity="error">This is an error alert — check it out!</Alert>}
      </div>
    </div>
  )
}
