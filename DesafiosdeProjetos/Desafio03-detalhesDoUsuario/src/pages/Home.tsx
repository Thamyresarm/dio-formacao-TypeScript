import { Center, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import NButton from "../components/NButton";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
    const [email, setEmail] = useState('');
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const validateUser = async (email: string) => {
        const loggedIn = await login(email)

        if (!loggedIn) {
            return alert('Email inválido')
        }
        
        setIsLoggedIn(true)
        changeLocalStorage({login: true})
        navigate('/conta/1')
    }

    return (
        <Card>
            <Center>
                <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder="password" />
            <Center>
                <NButton
                    onClick={() => validateUser(email)}
                />
            </Center>
        </Card>
    )
}

export default Home;