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
import Fragments from '../components/Fragments'
import Container from '../components/Container'
import ExecuteFunction from '../components/ExecuteFunction'

function App() {
  /* const name = 'Joaquim' */
  const [userName] = useState('Usuário')

  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', newCar: true, km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', newCar: false, km: 82452 },
    { id: 3, brand: 'Renault', color: 'Azul', newCar: false, km: 89865 },
  ]

  const showMessage = () => (
    console.log('Essa é a minha função!')
  )

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
      <CarDetails
        brand="Chevrolet"
        km={20000}
        color="vermelho"
        newCar={false}
      />
      {/* REAPROVEITANDO */}
      <CarDetails brand="Ford" color="Azul" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/* LOOP EM ARRAY DE OBJETOS */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragment */}
      <Fragments propFragment="teste" />
      {/* CHILDREN */}
      <Container myValue="testing">
        <p>E este é o conteúdo!</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* EXECUTAR FUNÇÃO */}
      <ExecuteFunction myFunction={showMessage} />
    </>
  )
}

export default App
