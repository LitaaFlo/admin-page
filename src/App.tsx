import React from 'react'
import {
  Routes,
  Route
} from 'react-router'
import { PATHS } from './consts'
import AuthPage from './containers/Auth'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import UsersPage from './containers/Users'
import { SnackbarProvider } from 'notistack'


function App() {
  return <SnackbarProvider maxSnack={3}>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path={PATHS.USERS}
        element={
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        }
      />

    </Routes>
  </SnackbarProvider>
}

export default App
