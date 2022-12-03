import { UserWithFieldsTypes } from '../../containers/Users/types'
import { FieldEnum, UserType } from './types'


export const getTypeFieldsForUser = (user: UserType): UserWithFieldsTypes => {
  let userWithTypeOfFields

  Object.keys(user).map(userParam => {
    userWithTypeOfFields = {
      ...userWithTypeOfFields,
      [userParam]: {value: user[userParam], type: FieldEnum[userParam]}}
  })
  return userWithTypeOfFields
}

export const getTypeFieldsForUsers = (users:UserType[]): UserWithFieldsTypes[] | {} => {
  return users.map((user) => {
    return getTypeFieldsForUser(user)
  })
}
