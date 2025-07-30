/* CSS */
import './App.css'

/* COMPONENTS */
import ManageData from '../components/ManageData'
import { useState } from 'react'

import City from './assets/city.jpg'
import ListRender from '../components/ListRender'
import ConditionalRender from '../components/ConditionalRender'
import ShowUserName from '../components/ShowUserName'
import CarDetails from '../components/CarDetails'

function App() {
  const name = 'Joaquim'
  const [userName] = useState('Usuário')

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
      <ListRender />
      <ConditionalRender />
      {/* PROPS */}
      <ShowUserName name={userName} />
      {/* DESTRUCTURING */}
      <CarDetails brand='Chevrolet' km={20000} color='vermelho' />
    </>
  )
}

export default App
