import { createContext, useEffect, useState } from "react"
import { api } from "../api"

interface IUserData {
    email: string
    password: string
    name: string
    balance: Number
    id: string 
  }

  interface IUserDataContext {
    userData: undefined | IUserData,
    setUserData: (userData: IUserData) => void
  }

export const UserData = createContext({} as IUserDataContext)

export const UserDataProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<IUserData>();

  useEffect(() => {
      const getData = async () => {
          const data: any | IUserData = await api
          setUserData(data)
      }
      
      getData()
  }, [])

  return (
    <UserData.Provider value={{ userData, setUserData }}>
        {children}
    </UserData.Provider>
)
}
