import React, {
  useEffect,
  useState
} from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import UserRow from './components/UserRow'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import { EditedElementIdType, operationEnum, UserWithFieldsTypes } from './types'
import { DELETE_USER_MESSAGE } from './constants'
import { useSnackbar } from 'notistack'
import usersStorage, { EVENT_UPDATE_USERS } from '../../services/storage/users-storage'
import { TableCellWidthSize } from './styles'
import { useNavigate } from 'react-router-dom'
import { NOTIFICATIONS_CLOSE_TIMER, PATHS } from '../../consts'
import UserModal from '../../components/Modal'
import authStorage from '../../services/storage/auth-storage'


const UsersPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [users, setUsers] = useState<UserWithFieldsTypes[]>(usersStorage.users || null)
  const [isEditedElementId, setIsEditedElementId] = useState<EditedElementIdType>(null)
  const [operationType, setOperationType] = useState(operationEnum.Close)

  const handleLogout = () => {
    navigate(PATHS.AUTH)
    authStorage.removeIsAuth()
  }

  useEffect(() => {
    if (!usersStorage.users) {
      handleLogout()
    }
    document.addEventListener(EVENT_UPDATE_USERS, function() {
      setUsers(usersStorage.users)
    })
    return () => document.removeEventListener(EVENT_UPDATE_USERS, function() {
      setUsers(usersStorage.users)
    })
  }, [])

  const handleAddUser = () => {
    setOperationType(operationEnum.Add)
  }

  const handleDeleteUser = (id: EditedElementIdType) => {
    usersStorage.deleteUser(id)
    enqueueSnackbar(DELETE_USER_MESSAGE, { autoHideDuration: NOTIFICATIONS_CLOSE_TIMER, variant: 'info' })
  }

  return users ? (
    <Container>
      <Box m={2}>
        <Grid container justifyContent='space-between'>
          <Typography variant='h4'>Пользователи</Typography>
          <Button onClick={handleLogout}>Выход</Button>
        </Grid>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCellWidthSize width='50'>ID</TableCellWidthSize>
              <TableCellWidthSize width='150'>Имя</TableCellWidthSize>
              <TableCell>Оплаченная подписка</TableCell>
              <TableCellWidthSize width='200'>Роль</TableCellWidthSize>
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <UserRow
                user={user}
                key={user.id.value}
                handleDeleteUser={handleDeleteUser}
                setIsEditedElementId={setIsEditedElementId}
                setOperationType={setOperationType}
              />))}

          </TableBody>
        </Table>

      </TableContainer>
      <Box marginTop={2} display="flex" justifyContent="flex-end">
        <Button variant="contained" onClick={handleAddUser}>
          Добавить пользователя
        </Button>
      </Box>
      {operationType !== operationEnum.Close ? <UserModal
        editId={isEditedElementId}
        setEditId={setIsEditedElementId}
        users={users}
        operationType={operationType}
        setOperationType={setOperationType}
      /> : null}
    </Container>
  ) : null
}

export default UsersPage
