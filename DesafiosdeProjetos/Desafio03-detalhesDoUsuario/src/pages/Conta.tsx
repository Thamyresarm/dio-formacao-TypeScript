import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from "react";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";
import { UserData } from "../components/UserData";

const Conta = () => {
    const userData = useContext(UserData)
    const { id } = useParams()  
    const navigate = useNavigate()

    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')
       
    const actualDate = new Date()
    
    if(userData.userData && id !== userData.userData.id){
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
                            mainContent = {`Bem Vindo(a) ${userData.userData?.name}`} 
                            content = {`${actualDate.getDate()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`} 
                        />

                        <CardInfo 
                            mainContent = {`Saldo`} 
                            content = {`${userData.userData?.balance} `} 
                        />
                       </>                    
                    )
                    
                }
            </SimpleGrid>
        </Center>        
        )
}

export default Conta;