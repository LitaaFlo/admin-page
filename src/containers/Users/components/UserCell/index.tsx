import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { UserCellPropsType } from './types'
import { ROLE_ITEMS } from './constants'


const UserInfoCell = ((props: UserCellPropsType) => {
  const {name, value, type} = props

  const userElementView = () => {
    switch (type) {
      case 'boolean':
        return <FormControlLabel
          control={<Checkbox checked={!!value} name={name} color="primary" disabled />}
          label=""
        />
      case 'enum':
        return ROLE_ITEMS.find(role => value === role.name)?.value
      default:

        return value
    }
  }


  return (
    <TableCell>
      {userElementView()}
    </TableCell>
  )
})

export default UserInfoCell
