import {RouterState} from 'connected-react-router'

declare global {

    declare type Nullable<T> = T | null;

    declare module '*.svg' { export default '' as string }
    declare module '*.jpg' { export default '' as string }

    declare const superUsers
    declare const defaultUsersList
}
