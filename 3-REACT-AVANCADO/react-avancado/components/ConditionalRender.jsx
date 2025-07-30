import { useState } from 'react'

function ConditionalRender() {
  const [x, setX] = useState(false)

  const changeX = () => {
    setX(x ? false : true)
  }

  const [name, setName] = useState('Matheus')

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso!</p>}
      <button onClick={changeX}>Alterar estado de X</button>
      {name === 'João' ? (
        <div>
          <p>O nome é João!</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado.</p>
        </div>
      )}
      <button onClick={() => setName('João')}>Alterar nome</button>
    </div>
  )
}

export default ConditionalRender
