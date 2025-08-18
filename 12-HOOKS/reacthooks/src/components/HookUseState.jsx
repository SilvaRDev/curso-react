import { useState } from 'react'

const HookUseState = () => {
  // 1 - useState
  let userName = 'João'

  const [name, setName] = useState('Rafael')

  const changeNames = () => {
    userName = 'João Souza'

    setName('Rafael Silva')

    console.log(userName)
  }

  // 2 - useState e inputs
  const [age, setAge] = useState(18)

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      {/* 2 - useState e input */}
      <form>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  )
}

export default HookUseState
