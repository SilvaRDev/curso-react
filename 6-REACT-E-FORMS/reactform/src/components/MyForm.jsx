import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
  /* 6- Controlled inputs */
  /* Gerenciamento de dados */

  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState()

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando o formulário...')
    console.log(name, email, bio)

    /* 7- limpar formulário */
    setName('')
    setEmail('')
    setBio('')
  }

  return (
    <div>
      {/* 5- Envio de form */}
      {/* 1- criação de form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
          {name && <p>{name}</p>}
        </div>
        {/* Label envolvendo input */}
        <label>
          <span>E-mail</span>
          {/* Simplificando a manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {email && <p>{email}</p>}
        </label>
        {/* 8- textarea */}
        <label htmlFor="bio">
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuário"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm
