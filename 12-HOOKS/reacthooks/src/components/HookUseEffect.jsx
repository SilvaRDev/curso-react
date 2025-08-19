import { useEffect, useState } from 'react'

const HookUseEffect = () => {
  // 1 - useEffect (sem dependências)
  useEffect(() => {
    console.log('Estou sendo executado.')
  })

  const [number, setNumber] = useState(1)

  const changeSomething = () => {
    setNumber(number + 1)
  }

  // 2 - Array de deps. vazio.
  useEffect(() => {
    console.log('Serei executado apenas uma vez.')
  }, [])

  // 3 - Ítem no array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0)

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log('Sou executado apenas quando o anotherNumber muda.')
    }
  }, [anotherNumber])

  // 4 - Cleanup do useEffect
  useEffect(() => {
    /* const timer = setTimeout(() => {
      console.log('Olá, mundo!')

      setAnotherNumber(anotherNumber + 1)
    }, 2000)

    return () => clearTimeout(timer) */
  }, [anotherNumber])

  return (
    <div>
      <h2>useEffect</h2>
      <p>Número: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar anotherNumber
      </button>
      <hr />
    </div>
  )
}

export default HookUseEffect
