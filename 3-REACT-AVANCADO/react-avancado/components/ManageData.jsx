import { useState } from 'react'

const ManageData = () => {
  let someData = 10

  let [number, setNumber] = useState(0) // Aqui inicializamos o nosso state

  const changeNumber = () => {
    setNumber(++number)
  }

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável.</button>
      </div>
      <div>
        <p>Cliques: {number}</p>
        <button onClick={changeNumber}>Clique-me!</button>
      </div>
    </div>
  )
}

export default ManageData
