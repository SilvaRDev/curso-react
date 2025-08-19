import { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const HookCustom = () => {
  const [number, setNumber] = useState(0)
  const previousValue = usePrevious(number)

  return (
    <div>
      <h2>usePrevious &#40;custom hook&#41;</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previousValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar</button>
      <hr />
    </div>
  )
}

export default HookCustom