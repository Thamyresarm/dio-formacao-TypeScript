// import { useContext } from "react"
// import { useNavigate } from "react-router-dom"
// import { AppContext } from "../components/AppContext"
import { api } from "../api"

export const login = async (email: string, password: string): Promise<boolean> => {  
    const data: any = await api

    // const { setIsLoggedIn } = useContext(AppContext)
    // const navigate = useNavigate()
    
    if(email !== data.email || password !== data.password){
        return false
        // return alert('Email Inválido!')
    }

    return true

    // setIsLoggedIn(true)
    // navigate(`/${data.id}`)
    // alert(`Bem vinda ${data.name}!`)
}
