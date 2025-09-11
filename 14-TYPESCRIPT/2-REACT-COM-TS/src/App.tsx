import './App.css'

function App() {
  // 1 - Variáveis
  const name: string = 'Rafael'
  const age: number = 19
  const isWorking: boolean = false

  return (
    <>
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando</p>}
    </>
  )
}

export default App
