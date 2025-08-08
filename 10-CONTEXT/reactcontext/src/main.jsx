import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterContextProvider } from './context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2 - Criando Provider */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
)
