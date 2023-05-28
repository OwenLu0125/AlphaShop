import { createContext } from 'react'
import icons from '../assets/icons/icons.svg'
import { MainContextProvier } from './MainContext'

export const AppContext = createContext()
export const AppContextProvier = ({ children }) => {
  const value = {
    icons,
  }
  return (
    <AppContext.Provider value={value}>
      <MainContextProvier>
        {children}
      </MainContextProvier>
    </AppContext.Provider>
  )
}
