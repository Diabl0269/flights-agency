import React, { useState } from 'react'
import { Typography, Select, Button, Divider } from '@material-ui/core'
import secondarySortingOptions from '../data/secondarySortingOptions'
import mainSortingOptions from '../data/mainSortingOptions.json'
import { useRecords } from '../context/RecordsProvider'
import classNames from 'classnames'
import d from '../data/dictionary'

export default () => {
  const [mainSorting, setMainSorting] = useState('cheapest')
  const [secondarySortingOption, setSecondarySortingOption] = useState(
    secondarySortingOptions[0].value
  )

  const { alterQueryObj } = useRecords()

  const buttonHandler = ({ value, text }) => {
    setMainSorting(text)
    alterQueryObj({ change: value, category: 'sortBy' })
  }

  const changeHandler = (e) => {
    const {
      target: { value }
    } = e
    setSecondarySortingOption(value)
    alterQueryObj({ change: value, category: 'sortBy' })
  }

  return (
    <div id="sortingContainer">
      <div id="buttonsContainer">
        {mainSortingOptions.map(({ text, value }) => (
          <Button
            key={text}
            onClick={() => buttonHandler({ value, text })}
            className={classNames({ chosen: mainSorting === text })}
          >
            <Typography>{d(text)}</Typography>
          </Button>
        ))}
      </div>

      <Divider orientation="vertical" flexItem id="divider" />

      <Typography>{`${d('orderBy')}: `}</Typography>
      <Select value={secondarySortingOption} onChange={changeHandler} native={true}>
        {secondarySortingOptions.map(({ value, text }) => (
          <option value={value} key={text}>
            {text}
          </option>
        ))}
      </Select>
    </div>
  )
}
