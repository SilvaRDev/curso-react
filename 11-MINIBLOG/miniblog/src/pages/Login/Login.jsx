import styles from './Login.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'

import { useState, useEffect } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const { createUser, authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')

    const user = {
      email,
      password,
    }

    const res = await createUser(user)
  }

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para poder utilizar o sistema</p>
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
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
        {!loading && (
          <button type="submit" className="btn">
            Cadastrar
          </button>
        )}
        {loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  )
}

export default Login
