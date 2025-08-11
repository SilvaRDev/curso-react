import { createContext, useReducer } from 'react'

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) => {
  // Switch
}

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' })

  console.log('Title color context: ', state)

  return (
    <TitleColorContext.Provider value={{ ...state }}>
      {children}
    </TitleColorContext.Provider>
  )
}
