import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const InfoConta = () => {
    return (
        <>
            <Text fontSize='3x1' fontWeight='bold'>
                Informações da Conta
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='x1'>
                    Conta
                </Text>
            </Link>
        </>
    )
}

export default InfoConta;