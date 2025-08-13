import styles from './Register.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'

import { useState, useEffect } from 'react'

const Register = () => {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser, authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      displayName,
      email,
      password,
    }

    if (password != confirmPassword) {
      setError('As senhas precisam ser iguais.')
      return
    }

    const res = await createUser(user)
  }

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  })

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Insira seu nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Insira seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Insira sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme a sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {!loading && (
          <button type="submit" className="btn">
            Cadastrar
          </button>
        )}
        {loading && (<button className='btn' disabled>Aguarde...</button>)}
      </form>
    </div>
  )
}

export default Register
