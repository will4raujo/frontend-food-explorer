import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

import { Routes } from './routes'
import { AuthProvider } from './contexts/AuthProvider'
import { CartProvider } from './contexts/CartProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
          <CartProvider>
            <Routes />
          </CartProvider>   
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
