import { useState } from 'react'

function ConditionalRender() {
  const [x, setX] = useState(false)

  const changeX = () => {
    setX(x === true ? false : true)
  }

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <button onClick={changeX}>Alterar estado de X</button>
    </div>
  )
}

export default ConditionalRender
