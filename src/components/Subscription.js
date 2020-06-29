import React from 'react'
import { Typography, Button, InputAdornment, TextField } from '@material-ui/core'
import d from '../data/dictionary'
import CreateIcon from '@material-ui/icons/Create'
import EmailIcon from '@material-ui/icons/Email'

export default () => {
  return (
    <div id="subscriptionContainer">
      <div>
        <Typography>{d('joinClub')}</Typography>
        <div id="formContainer">
          <TextField
            variant="filled"
            id="textField"
            placeholder={d('fullName')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CreateIcon id="name" />
                </InputAdornment>
              )
            }}
          />
          <TextField
            variant="filled"
            id="textField"
            placeholder={d('email')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon id="email" />
                </InputAdornment>
              )
            }}
          />
          <Button onClick={() => alert(d('willSubscribe'))}>{d('signUp')}</Button>
        </div>
      </div>
    </div>
  )
}
