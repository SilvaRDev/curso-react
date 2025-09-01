import { api, requestConfig } from '../utils/config'

// Register an User
const register = async (data) => {
  const config = requestConfig('POST', data)

  try {
    const res = await fetch(api + '/users/register', config)
    const json = await res.json()

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(res))
    }

    return json
  } catch (error) {
    console.log(error)
    return error 
  }
}

const authService = {
  register,
}

export default authService
