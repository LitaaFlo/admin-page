import React, {useState} from 'react'
import { useNavigate } from 'react-router'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import { useSnackbar } from 'notistack'
import Snell from '../../components/Snell'
import { NOTIFICATIONS_CLOSE_TIMER, PATHS } from '../../consts'
import authStorage from '../../services/storage/auth-storage'
import usersStorage from '../../services/storage/users-storage'
import { getTypeFieldsForUsers } from '../../utils/getTypeFieldsForUsers'
import { ERROR_AUTH_MESSAGE, SUCCESS_AUTH_MESSAGE } from './constants'
import { GridFullWidth } from './styles'


const AuthPage = () => {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()


  const [authInfo, setAuthInfo] = useState({
    name: '',
    password: ''
  })

  const [authError, setAuthError] = useState(false)

  const isDisabledButton = !(authInfo.name && authInfo.password)

  const handleSubmit = event => {
    event.preventDefault()
    const {name, password} = authInfo
    if (superUsers.find(superUser => superUser.name === name && superUser.password === password)) {
      authStorage.setIsAuth(true)
      setAuthError(false)
      enqueueSnackbar(SUCCESS_AUTH_MESSAGE, { autoHideDuration: NOTIFICATIONS_CLOSE_TIMER, variant: 'success' })
      !usersStorage.users && usersStorage.setUsers(getTypeFieldsForUsers(defaultUsersList))
      navigate(PATHS.USERS)
    } else {
      setAuthError(true)
      enqueueSnackbar(ERROR_AUTH_MESSAGE, { autoHideDuration: NOTIFICATIONS_CLOSE_TIMER, variant: 'error' })
    }
  }


  const handleChangeInput = event => {
    setAuthError(false)
    const {name, value} = event.target
    setAuthInfo({
      ...authInfo,
      [name]: value
    })
  }


  return (
    <GridFullWidth container justifyContent='center' alignItems='center' direction="column">
      <Snell />
      <Typography variant='h6'>Войдите в систему</Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <TextField
            error = {authError}
            id="name"
            name="name"
            label="Имя пользователя"
            value={authInfo.name}
            onChange={handleChangeInput}
          />
          <TextField
            error = {authError}
            id="password"
            name="password"
            type="password"
            label="Пароль"
            value={authInfo.password}
            onChange={handleChangeInput}
          />
          <Box m={2} textAlign="center">
            <Button type="submit" disabled={isDisabledButton}>Войти</Button>
          </Box>
        </FormGroup>
      </form>
    </GridFullWidth>
  )
}

export default AuthPage
