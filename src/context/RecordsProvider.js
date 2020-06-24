import React, { createContext, useContext, useState, useEffect } from 'react'
import getRecordsFromDB from '../api-calls/getRecordsFromDB'

const RecordsContext = createContext()
const RecordsProvider = (props) => {
  const [records, setRecords] = useState()

  useEffect(() => {
    const newRecords = getRecordsFromDB({})
    setRecords(newRecords)
  }, [])

  const getRecords = (queryObj) => {
    const newRecords = getRecordsFromDB(queryObj)
    setRecords(newRecords)
  }

  return <RecordsContext.Provider value={{ getRecords, records }} {...props} />
}

const useRecords = () => useContext(RecordsContext)
export { useRecords, RecordsProvider }
