import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";

interface IUserData {
    email: string
    password: string
    name: string
    balance: Number
    id: string
  }

const Conta = () => {
    const [userData, setUserData] = useState<null | IUserData>();
    const { id } = useParams()  
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')
    
    useEffect(() => {
        const getData = async () => {
            const data: any | IUserData = await api
            setUserData(data)
        }
        
        getData()
    }, [])
    
    const actualDate = new Date()
    
    if(userData && id !== userData.id){
        navigate('/')
    }
    return(
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === null || userData === undefined ?
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ) : 
                    (
                       <>
                        <CardInfo 
                            mainContent = {`Bem Vindo(a) ${userData?.name}`} 
                            content = {`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`} 
                        />

                        <CardInfo 
                            mainContent = {`Saldo`} 
                            content = {`${userData?.balance} `} 
                        />
                       </>                    
                    )
                    
                }
            </SimpleGrid>
        </Center>        
        )
}

export default Conta;