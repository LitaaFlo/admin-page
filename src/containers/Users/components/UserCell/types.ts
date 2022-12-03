import { FieldEnum } from '../../../../utils/getTypeFieldsForUsers/types'
import { UserParamsType } from '../../types'

export type UserCellPropsType = {
    name: string;
    value: UserParamsType;
    type: FieldEnum
};

