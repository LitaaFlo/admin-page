import React from 'react'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'


const container = document.getElementById('app')
if (container) {
  const root = createRoot(container)
  root.render(<BrowserRouter>
    <App />
  </BrowserRouter>)
}

