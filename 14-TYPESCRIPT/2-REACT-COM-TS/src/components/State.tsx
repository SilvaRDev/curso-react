import { useState } from 'react'
import type { ChangeEvent } from 'react' // PAra importar tipos, usamos a palavra chave 'type' antes do módulo.

const state = () => {
  const [text, setText] = useState<string | null>('Testando o Hook')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <p>O texto é: {text}</p>
      <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default state
