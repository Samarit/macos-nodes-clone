import React, { createContext, useState, useContext } from "react"

type PropsChildren = {
  children: React.ReactNode
}

type AppContext = {
  isClicked: boolean,
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}


const AppContext = createContext<AppContext | null>(null)

export const useAppContext = () => {
  const context = useContext(AppContext)

  if ( context === null ) throw new Error('No context')

  return context
}
const AppContextProvider : React.FC<PropsChildren> = ({ children }) => {

  const [isClicked, setIsClicked] = useState(false)

  return (
    <AppContext.Provider value={{isClicked, setIsClicked}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppContextProvider}