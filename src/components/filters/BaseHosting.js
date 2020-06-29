import React, { useState } from 'react'
import d from '../../data/dictionary'
import { Typography, Radio } from '@material-ui/core'
import { useRecords } from '../../context/RecordsProvider'

export default () => {
  const {
    queryObj: { queryWithBreakfast, queryWithLodging },
    recordsData: {
      priceEdges: [lowestPrice]
    },
    alterQueryObj
  } = useRecords()

  const clickHandler = ({ checked, setChecked, category }) => {
    setChecked(!checked)
    alterQueryObj({ change: !checked, category })
  }

  const HostingOption = ({ text, initChecked, category }) => {
    const [checked, setChecked] = useState(initChecked)

    return (
      <div id="hostingOptionContainer">
        <div id="radioButtonWithTitleContainer">
          <Radio
            checked={checked}
            onClick={() => clickHandler({ checked, setChecked, category })}
          />
          <Typography>{text}</Typography>
        </div>
        <Typography id="lowestPriceText">{`$${lowestPrice}`}</Typography>
      </div>
    )
  }

  return (
    <div id="filtersBaseHostingContainer">
      <Typography id="baseHostingTitle">{d('baseHosting')}</Typography>
      <div id="hostingOptionsContainer">
        <HostingOption
          text={d('lodging')}
          initChecked={queryWithLodging}
          category={'queryWithLodging'}
        />
        <HostingOption
          text={d('breakfast')}
          initChecked={queryWithBreakfast}
          category={'queryWithBreakfast'}
        />
      </div>
    </div>
  )
}
