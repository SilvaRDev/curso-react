import './App.css'
import MyComponent from './components/MyComponent'

function App() {
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
    </>
  )
}

export default App
