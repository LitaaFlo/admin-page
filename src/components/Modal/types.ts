import React from 'react'
import { SetStateAction, Dispatch } from 'react'
import { EditedElementIdType, operationEnum, UserWithFieldsTypes } from '../../containers/Users/types'

export type UserModalType = {
  editId: EditedElementIdType;
  setEditId: Dispatch<SetStateAction<EditedElementIdType>>;
  users: UserWithFieldsTypes[];
  operationType: operationEnum;
  setOperationType: Dispatch<SetStateAction<operationEnum>>;
}


export enum labelsEnum {
  role = 'Роль',
  isSubscription = 'Наличие оплаченной подписки',
  name= 'Имя',
  level = 'Уровень',
  gold = 'Золото'
}