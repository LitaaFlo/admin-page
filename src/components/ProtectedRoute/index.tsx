import React from 'react'
import {Navigate} from 'react-router-dom'
import { PATHS } from '../../consts'
import authStorage from '../../services/storage/auth-storage'
import { ProtectedRouteType } from './types'

export default ({children}: ProtectedRouteType) => {
  if (!authStorage.isAuth) {
    return <Navigate to={PATHS.AUTH} replace />
  }
  return children
}
