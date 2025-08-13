import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [authError, setAuthError] = useState(null)
  const [loading, setLoading] = useState(null)

  // cleanup
  // deal with memoty leak
  const [canceled, setCanceled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if (canceled) {
      return
    }
  }

  // Register
  const createUser = async (data) => {
    checkIfIsCancelled()

    setLoading(true)
    setAuthError(null)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.displayName,
      })

      setLoading(false)
      return user
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)

      let systemErrorMessage

      if (error.message.includes('password')) {
        systemErrorMessage = 'A senha precisa conter ao menos 6 caracteres.'
      } else if (error.message.includes('email-already')) {
        systemErrorMessage = 'E-mail já cadastrado.'
      } else {
        systemErrorMessage = 'Ocorreu um erro. Tente novamente mais tarde'
      }
      setAuthError(systemErrorMessage)
    }
  }

  // Logout - Sign Out
  const logout = () => {
    checkIfIsCancelled(true)

    signOut(auth)
  }

  useEffect(() => {
    return () => setCanceled(true)
  }, [])

  return {
    auth,
    createUser,
    authError,
    loading,
    logout,
  }
}
