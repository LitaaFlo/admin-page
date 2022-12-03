import { FieldEnum } from "../../utils/getTypeFieldsForUsers/types";

export type roles = 'admin' | 'user';


export type EditedElementIdType = Nullable<number>;
export type UserParamsType = 'text' | 'boolean' | 'enum' | EditedElementIdType;


export type oneFieldType = {
  value: UserParamsType;
  type: FieldEnum;
}


export type UserWithFieldsTypes = {
  name: oneFieldType;
  isSubscription: oneFieldType;
  role: oneFieldType;
  id: oneFieldType;
  level: oneFieldType;
  gold: oneFieldType;
}

export enum operationEnum {
  Add = 'add',
  Edit = 'edit',
  Close = 'close'
}
