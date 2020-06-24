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
        {footerColumns.map((column, colndex) => (
          <Typography key={text} id="footerColumn">
            {column.map((text, index) =>
              index === 0 ? (
                <h4 key={text}>{text}</h4>
              ) : (
                <div key={text} onClick={() => pageAlert(text)} id="footerLink">
                  {text}
                </div>
              )
            )}
          </Typography>
        ))}
      </div>
    </div>
  )
}
