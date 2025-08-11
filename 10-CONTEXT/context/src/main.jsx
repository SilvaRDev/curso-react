import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterContextProvider } from './context/CounterContext'
import { TitleColorContextProvider } from './context/TitleColorContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2 - Criando Provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <App />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
