import { SetStateAction, Dispatch } from 'react'
import { UserWithFieldsTypes, EditedElementIdType, operationEnum } from '../../types'

export type UserRowType = {
  user: UserWithFieldsTypes;
  handleDeleteUser:(id: EditedElementIdType) => void;
  setIsEditedElementId: Dispatch<SetStateAction<EditedElementIdType>>;
  setOperationType: Dispatch<SetStateAction<operationEnum>>;
}
