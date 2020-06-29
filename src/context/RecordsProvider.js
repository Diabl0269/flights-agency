import React, { createContext, useContext, useState, useEffect } from 'react'
import getRecordsDataFromDB from '../api-calls/getRecordsDataFromDB'
import { DEFAULT_RECORDS_DATA, DEFAULT_QUERY_OBJ } from '../data/defaults.json'
import { cloneDeep } from 'lodash'
import addOrRemove from '../utils/addOrRemoveNumberFromArray'

const RecordsContext = createContext()
const RecordsProvider = (props) => {
  const [queryObj, setQueryObj] = useState(DEFAULT_QUERY_OBJ)
  const [recordsData, setRecordsData] = useState(DEFAULT_RECORDS_DATA)

  const getRecordsData = (queryObj) => {
    const newRecordsData = getRecordsDataFromDB(queryObj)
    setRecordsData(newRecordsData)
  }

  const alterQueryObj = ({ change, category }) => {
    if (category === 'ratings') {
      const { ratings } = queryObj
      const newRatings = addOrRemove(ratings, change)
      return setQueryObj({ ...queryObj, ratings: newRatings })
    }
    const newQueryObj = cloneDeep(queryObj)
    newQueryObj[category] = change
    setQueryObj(newQueryObj)
  }

  useEffect(() => {
    getRecordsData(queryObj)
  }, [queryObj])

  return (
    <RecordsContext.Provider
      value={{
        getRecordsData,
        recordsData,
        setQueryObj,
        alterQueryObj,
        queryObj,
        mobile: props.mobile
      }}
      {...props}
    />
  )
}

const useRecords = () => useContext(RecordsContext)
export { useRecords, RecordsProvider }
