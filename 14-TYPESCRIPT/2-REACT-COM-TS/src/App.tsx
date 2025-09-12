import './App.css'

// 4 - Importação de componente
import FirstComponent from './components/FirstComponent'

// 5 - Desestruturando Props
import SecondComponent from './components/SecondComponent'
import Desctructuring from './components/Desctructuring'

// 6 - useState
import State from './components/State'

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
      <FirstComponent />
      <SecondComponent name="Teste" />
      <Desctructuring
        title="Meu título"
        content="Post de teste"
        commentsQty={15}
        tags={['javascript', 'react', 'typescript']}
      />
      <Desctructuring
        title="Outro comentário"
        content="Mais um comentário de teste, gerado em um componente feito em tsx."
        commentsQty={15}
        tags={['python', 'php']}
      />
      <State />
    </>
  )
}

export default App
