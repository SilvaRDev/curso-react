import { useContext } from 'react'
import { CounterContext } from '../context/CouterContext'

const Home = () => {
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando o valor do contexto */}
    </div>
  )
}

export default Home
