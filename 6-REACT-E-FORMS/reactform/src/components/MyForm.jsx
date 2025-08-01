import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  /* Gerenciamento de dados */

  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      {/* 1- criação de form */}
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
          />
          {name && <p>{name}</p>}
        </div>
        {/* Label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          {email && <p>{email}</p>}
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
