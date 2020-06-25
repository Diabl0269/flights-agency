import React from 'react'
import ListItem from './ListItem'
import d from '../data/dictionary'
import { Typography } from '@material-ui/core'
import { useRecords } from '../context/RecordsProvider'

export default () => {
  const {
    recordsData: { records }
  } = useRecords()

  const resultsLength = records.length
  return (
    <div id="recordsContainer">
      <Typography id="titleContainer">{`${d('totalFound')} ${resultsLength} ${d(
        'results'
      )}`}</Typography>
      <div id="listContainer">
        {records.map((record, i) => (
          <ListItem record={record} key={i}/>
        ))}
      </div>
    </div>
  )
}
