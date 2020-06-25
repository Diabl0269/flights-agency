import React from 'react'
import { Typography } from '@material-ui/core'
import footerColumns from '../../../data/footerColumns'
import logo from '../../../media/logo.svg'
import pageAlert from '../../../utils/pageAlert'
import d from '../../../data/dictionary'

export default () => {
  return (
    <div id="upperFooter">
      <img alt={d('plane')} src={logo} id="footerLogo" />
      <div id="footerDataColumnsContainer">
        {footerColumns.map((column, colIndex) => (
          <div key={colIndex} id="footerColumn">
            {column.map((text, index) =>
              index === 0 ? (
                <Typography id="footerColumnTitle" key={text}>
                  {text}
                </Typography>
              ) : (
                <Typography key={text} onClick={() => pageAlert(text)} id="footerLink">
                  {text}
                </Typography>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
