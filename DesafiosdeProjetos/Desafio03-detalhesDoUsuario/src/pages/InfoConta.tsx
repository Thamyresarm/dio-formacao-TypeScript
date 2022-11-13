import { Button, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../components/UserData";

const InfoConta = () => {
    const userdata = useContext(UserData)

    return (
        <>
            <Text fontSize='3x1' fontWeight='bold'>
                Informações da Conta
            </Text>
            <Text fontSize='3x1' fontWeight='bold'>Id:</Text>  {userdata.userData?.id} 
            <Text fontSize='3x1' fontWeight='bold'>Nome:</Text>  {userdata.userData?.name}
            <Text fontSize='3x1' fontWeight='bold'>Email:</Text> {userdata.userData?.email}
            <br />
            <br />
            <Link to='/conta/1'>
                <Button fontSize='x1'>
                    Acessar Conta
                </Button>
            </Link>
        </>
    )
}

export default InfoConta;