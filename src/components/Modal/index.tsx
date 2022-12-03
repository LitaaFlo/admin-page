import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography'
import { useSnackbar } from 'notistack'
import { oneFieldType, operationEnum } from '../../containers/Users/types'
import { CHANGE_USER_ERROR_MESSAGE, CHANGE_USER_MESSAGE } from '../../containers/Users/constants'
import { NOTIFICATIONS_CLOSE_TIMER } from '../../consts'
import usersStorage from '../../services/storage/users-storage'
import { getTypeFieldsForUser } from '../../utils/getTypeFieldsForUsers'
import { userEditElementView } from '../../utils/userEditElementView'
import { UserModalType } from './types'
import { getNewUserId } from '../../utils/getNewUserId'
import { REQUIRED_FORM_FIELD } from './constants'
import { FieldEnum } from '../../utils/getTypeFieldsForUsers/types'

const UserModal = ({editId, setEditId, users, operationType, setOperationType}: UserModalType) => {
  const { enqueueSnackbar } = useSnackbar()

  const [validError, setValidError] = useState('')

  const findIndex = users.findIndex(user => user.id.value === editId)

  const handleClose = () => {
    setEditId(null)
    setOperationType(operationEnum.Close)
  }

  let newUser

  if (operationType === operationEnum.Add) {
    newUser = getTypeFieldsForUser({
      name: '',
      isSubscription: false,
      role: 'user',
      id: getNewUserId(),
      level: 1,
      gold: 0
    })
  }
  const userParams: [string, oneFieldType][] =
    findIndex > -1
      ? Object.entries(users[findIndex])
      : Object.entries(newUser)


  const handleUpdateUsers = (newUsers) => {
    usersStorage.setUsers(newUsers)
    handleClose()
  }

  const getFieldValue = (fieldType, name, event) => {
    if (fieldType !== FieldEnum.id) {
      return fieldType === FieldEnum.isSubscription ?
        event.target.elements[name].checked :
        event.target.elements[name].value
    }
    return users[findIndex]?.id?.value || newUser.id.value
  }

  const fillRequiredField = (name, event) => {
    return !!event.target.elements[name].value
  }

  const setError = (name) => {
    enqueueSnackbar(CHANGE_USER_ERROR_MESSAGE, { autoHideDuration: NOTIFICATIONS_CLOSE_TIMER, variant: 'error' })
    setValidError(name)
  }

  const handleSave = (event) => {
    event.preventDefault()
    if (fillRequiredField(REQUIRED_FORM_FIELD, event)) {
      userParams.forEach(param => {
        users[findIndex][param[0]].value = getFieldValue(param[1].type, param[0], event)
      })
      enqueueSnackbar(CHANGE_USER_MESSAGE, { autoHideDuration: NOTIFICATIONS_CLOSE_TIMER, variant: 'success' })
      handleUpdateUsers(users)
    } else {
      setError(REQUIRED_FORM_FIELD)
    }
  }

  const handleAdd = (event) => {
    event.preventDefault()
    if (fillRequiredField(REQUIRED_FORM_FIELD, event)) {
      userParams.forEach(param => {
        newUser[param[0]].value = getFieldValue(param[1].type, param[0], event)
      })
      enqueueSnackbar(CHANGE_USER_MESSAGE, { autoHideDuration: NOTIFICATIONS_CLOSE_TIMER, variant: 'success' })
      handleUpdateUsers([...users, newUser])
    } else {
      setError(REQUIRED_FORM_FIELD)
    }
  }

  return (
    <Dialog open={operationType !== operationEnum.Close} onClose={handleClose} fullWidth>
      <DialogTitle>
        {operationType === operationEnum.Edit
          ? `Редактировать пользователя ${users[findIndex].name.value}`
          : 'Добавить нового пользователя'}
      </DialogTitle>
      <form onSubmit={operationType === operationEnum.Edit ? handleSave : handleAdd}>
        <DialogContent>
          <Typography align='right' variant='subtitle2'>{`id пользователя: ${users[findIndex]?.id?.value || newUser.id.value}`}</Typography>
          <FormGroup>
            { userParams.map((param, index) => {
              const {type, value} = param[1]
              const name = param[0]
              return <React.Fragment key={`${type} ${name}`}>
                {userEditElementView(type, value, name, validError === name, index === 0)}
              </React.Fragment>
            })}
          </FormGroup>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отменить
          </Button>
          <Button type="submit" color="primary">
            Подтвердить
          </Button>
        </DialogActions>
      </form>

    </Dialog>

  )

}
export default UserModal
