import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Input from '@material-ui/core/Input'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import { ROLE_ITEMS } from '../containers/Users/components/UserCell/constants'
import { UserParamsType } from '../containers/Users/types'
import { FieldEnum } from './getTypeFieldsForUsers/types'
import { labelsEnum } from '../components/Modal/types'

export const userEditElementView = (type: FieldEnum, value: UserParamsType, name: string, isError?: boolean, isAutofocus?: boolean) => {
  switch (type) {
    case 'enum':
      return <FormControl>
        <InputLabel>{labelsEnum[name]}</InputLabel>
        <Select
          name={name}
          labelId={name}
          defaultValue={value}
          error={isError}
          autoFocus={isAutofocus}
        >
          {ROLE_ITEMS.map(role => <MenuItem value={role.name} key={role.name}>{role.value}</MenuItem>)}

        </Select>
      </FormControl>
    case 'text':
      return <FormControl>
        <InputLabel>{labelsEnum[name]}</InputLabel>
        <Input id={name} name={name} defaultValue={value} error={isError} autoFocus={isAutofocus}/>
      </FormControl>
    case 'boolean':
      return <FormControlLabel
        control={<Checkbox autoFocus={isAutofocus} defaultChecked={!!value} name={name} color="primary" />}
        name={name} 
        label={labelsEnum[name]}
      />
    case 'hidden':
      break
    default:
      return <div />
  }
}
