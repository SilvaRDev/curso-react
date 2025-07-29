/* CSS */
import './App.css'

/* COMPONENTS */
import ManageData from '../components/ManageData'

import City from './assets/city.jpg'

function App() {
  return (
    <>
      <h1>React Avançado</h1>
      {/* IMAGEM EM PÚBLIC */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* IMAGEM EM ASSETS */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
    </>
  )
}

export default App
