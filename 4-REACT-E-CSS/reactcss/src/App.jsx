import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n = 15
  const [name] = useState('João')
  const redTitle = true

  return (
    <>
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* INLINE CSS */}
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>
        Este elemento foi estilizado de forma inline.
      </p>
      {/* CSS DO INLINE DINÂMICO */}
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'pink' }}>
        CSS Dinâmico
      </h2>
      <h2 style={name == 'João' ? { color: 'green', backgroundColor: 'black' } : null}>
        CSS Dinâmico
      </h2>
      {/* CLASSE DINÂMICA */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>
      {/* CSS MODULES */}
      <Title />
    </>
  )
}

export default App
