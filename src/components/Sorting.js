import React, { useState, useEffect } from 'react'
import { Typography, Select, Button, Divider, MenuItem } from '@material-ui/core'
import secondarySortingOptions from '../data/secondarySortingOptions'
import mainSortingOptions from '../data/mainSortingOptions.json'
import { useRecords } from '../context/RecordsProvider'
import classNames from 'classnames'
import d from '../data/dictionary'
import { isEqual } from 'lodash'

export default () => {
  const [mainSorting, setMainSorting] = useState('cheapest')
  const [secondarySortingOption, setSecondarySortingOption] = useState(
    secondarySortingOptions[0].value
  )

  const { alterQueryObj, mobile } = useRecords()

  const setSecondaryOptionToMainOption = (value) => {
    const { category, order } = value
    let result = ''
    switch (category) {
      case 'price':
        if (order === 'asec') result = 'cheapest'
        break
      case 'rating':
        if (order === 'desc') result = 'mostPopular'
        break
      case 'mostLucrative':
        result = 'mostLucrative'
        break
      default:
        break
    }
    setMainSorting(result)
  }

  const setMainOptionToSecondaryOption = (value) => {
    let result = ''
    secondarySortingOptions.forEach(({ value: optionValue }) => {
      if (isEqual(value, optionValue)) return (result = optionValue)
    })
    setSecondarySortingOption(result)
  }

  const buttonHandler = ({ value, text }) => {
    setMainSorting(text)
    setMainOptionToSecondaryOption(value)
    alterQueryObj({ change: value, category: 'sortBy' })
  }

  const changeHandler = (e) => {
    const {
      target: { value }
    } = e
    setSecondarySortingOption(value)
    setSecondaryOptionToMainOption(value)
    alterQueryObj({ change: value, category: 'sortBy' })
  }

  const containerIdSetter = (mobileCondition) =>
    mobileCondition ? 'mobileSortingContainer' : 'sortingContainer'
  const [containerId, setContainerId] = useState(containerIdSetter(mobile))
  useEffect(() => {
    setContainerId(containerIdSetter(mobile))
  }, [mobile])

  return (
    <div id={containerId}>
      <div id="buttonsContainer">
        {mainSortingOptions.map(({ text, value }) => {
          return (
            <Button
              key={text}
              onClick={() => buttonHandler({ value, text })}
              className={classNames({ chosen: mainSorting === text })}
            >
              <Typography>{d(text)}</Typography>
            </Button>
          )
        })}
      </div>

      <Divider orientation="vertical" flexItem id="divider" />

      <div id="selectContainer">
        <Typography>{`${d('orderBy')}: `}</Typography>
        <Select
          onChange={changeHandler}
          value={secondarySortingOption}
          MenuProps={{
            transformOrigin: {
              horizontal: 'right',
              vertical: 'top'
            },
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom'
            },
            getContentAnchorEl: null,
            disableScrollLock: true
          }}
        >
          {secondarySortingOptions.map(({ value, text }) => (
            <MenuItem value={value} key={text}>
              {text}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  )
}
