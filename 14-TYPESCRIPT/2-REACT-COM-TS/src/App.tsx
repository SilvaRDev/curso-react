import './App.css'

// 4 - Importação de componente
import FirstComponent from './components/FirstComponent'

// 5 - Desestruturando Props
import SecondComponent from './components/SecondComponent'
import Desctructuring, { Category } from './components/Desctructuring'

// 6 - useState
import State from './components/State'
import { createContext } from 'react'

// 11 - Usando contexto
import Context from './components/Context'

// 9 - Type
type textOrNull = string | null

type fixed = 'Isso' | 'Ou' | 'Aquilo'

// 10 - Context API
interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - Variáveis
  const name: string = 'Rafael'
  const age: number = 19
  const isWorking: boolean = false

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  // 9 - Type
  const myText: textOrNull = 'tem algum texto aqui.'
  let mySecondText: textOrNull = null

  /* mySecondText = 'Opa' */

  // const testandoFixed: fixed = 'Isso'

  // 10 - Context API
  const contextValue: IAppContext = {
    language: 'JavaScript',
    framework: 'Express',
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
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
          category={Category.P}
        />
        <Desctructuring
          title="Outro comentário"
          content="Mais um comentário de teste, gerado em um componente feito em tsx."
          commentsQty={15}
          tags={['python', 'php']}
          category={Category.TS}
        />
        <State />
        {myText && 
          <p>Tem texto na variável</p>
        }
        {mySecondText &&
          <p>Tem texto na variável.</p>
        }
        <Context />
      </>
    </AppContext.Provider>
  )
}

export default App
