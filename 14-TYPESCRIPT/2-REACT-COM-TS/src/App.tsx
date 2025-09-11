import './App.css'

function App() {
  // 1 - Variáveis
  const name: string = 'Rafael'
  const age: number = 19
  const isWorking: boolean = false

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  return (
    <>
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
    </>
  )
}

export default App
