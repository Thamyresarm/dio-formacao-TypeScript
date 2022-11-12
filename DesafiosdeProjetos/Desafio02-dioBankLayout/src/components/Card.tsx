import { 
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'
import { NButton } from './NButton';
import { useState } from 'react';
import { login } from '../services/login';

export const Card = () => {
  const [email, setEmail] = useState('');
  return(
<ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <Input placeholder="password" />
          <Center>
            <NButton
              onClick = {() => login(email)} 
            />            
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  )
}