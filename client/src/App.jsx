
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Home from "./home/Home";
import Detail from "./detail/Detail";
import LoginPage from "./Login/LoginPage";
import Compra from "./compra/Compra";
import Filtro from "./filtro/Filtro";
import Perfil from "./Perfil/Perfil";
import RegisterPage from "./Login/RegisterPage";


import {useJwt} from 'react-jwt'

function App() {
  const { decodedToken } = useJwt(localStorage.getItem("Upmn"));


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:filtro" element={<Filtro/>}/>
      <Route path="/registro" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/perfil" element={<Perfil decodedToken={decodedToken}/>}/>
      <Route path="/detalle/:id" element={<Detail/>}/>
      <Route path="/cpm" element={<Compra/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
