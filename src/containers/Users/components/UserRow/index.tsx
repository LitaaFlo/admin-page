import React, { useMemo} from 'react'
import UserInfoCell from '../UserCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import TableCell from '@material-ui/core/TableCell'
import { UserRowType } from './types'
import { EditedElementIdType, operationEnum } from '../../types'

const UserRow = ({user, handleDeleteUser, setIsEditedElementId, setOperationType}: UserRowType) => {
  const userId = user.id.value as EditedElementIdType

  const handleEditUser = () => {
    setOperationType(operationEnum.Edit)
    setIsEditedElementId(userId)
  }

  const memoUserRow = useMemo(() => {
    return <TableRow>
      <UserInfoCell
        value={user.id.value}
        type={user.id.type}
        name='id'
      />
      <UserInfoCell
        value={user.name.value}
        type={user.name.type}
        name='name'
      />
      <UserInfoCell
        value={user.isSubscription.value}
        type={user.isSubscription.type}
        name='name'
      />
      <UserInfoCell
        value={user.role.value}
        type={user.role.type}
        name='name'
      />
      <TableCell>
        <Button
          variant="outlined"
          onClick={handleEditUser}
        >
        Редактировать
        </Button>
      </TableCell>
      <TableCell>
        <Tooltip title="Удалить" aria-label="add">
          <IconButton onClick={() => handleDeleteUser(userId)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

      </TableCell>

    </TableRow>
  }, [user])

  return memoUserRow
}

export default UserRow
