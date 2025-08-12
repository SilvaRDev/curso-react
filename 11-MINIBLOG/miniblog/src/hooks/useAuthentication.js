import {
  getAuth,
  createUseWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
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

}
