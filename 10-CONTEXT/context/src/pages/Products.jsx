/* import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext' */

import { useCounterContext } from '../hooks/useCounterContext'

const Products = () => {
  const { counter } = useCounterContext()

  return (
    <div>
      <h1>Produtos</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Products
