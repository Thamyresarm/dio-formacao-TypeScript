import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Conta from "./pages/Conta";
import Home from "./pages/Home";
import InfoConta from "./pages/InfoConta";

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={<Home />} />            
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home />} />
            <Route path='/infoconta/' element={<InfoConta />} />
        </Routes>
    )
}

export default MainRoutes;