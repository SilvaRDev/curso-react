import {useState} from 'react'

const HookUseState = () => {
  // 1 - useState
  let userName = 'João'

  const [name, setName] = useState('Rafael')

  const changeNames = () => {

    userName = 'João Souza'

    setName('Rafael Silva')
    
    console.log(userName)

  }
  
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nomes</button>
      <hr />
    </div>
  )
}

export default HookUseState