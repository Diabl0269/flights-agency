import React, { useState } from 'react'
import d from '../../data/dictionary'
import { TextField, InputAdornment } from '@material-ui/core'
import { Search as SearchIcon } from '@material-ui/icons'
import { useRecords } from '../../context/RecordsProvider'

export default () => {
  const { alterQueryObj } = useRecords()
  const [change, setChange] = useState('')

  const changeHandler = (e) => {
    setChange(e.target.value)
  }

  const clickHandler = (e) => {
    alterQueryObj({ change, category: 'queryHotelName' })
  }

  return (
    <div id="filtersHotelSearchBarContainer">
      <div>
        <TextField
          variant="filled"
          id="textField"
          placeholder={d('searchByCityName')}
          onChange={changeHandler}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon id="searchButton" onClick={clickHandler} />
              </InputAdornment>
            )
          }}
        />
      </div>
    </div>
  )
}
