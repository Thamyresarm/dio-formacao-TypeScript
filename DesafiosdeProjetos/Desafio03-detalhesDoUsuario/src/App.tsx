import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './components/AppContext';
import { Layout } from './components/Layout';
import { UserDataProvider } from './components/UserData';
import MainRoutes from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <UserDataProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </UserDataProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
