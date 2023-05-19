
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Home from "./home/Home";
import Detail from "./detail/Detail";
import LoginPage from "./Login/LoginPage";
import Compra from "./compra/Compra";
import Filtro from "./filtro/Filtro";
import Perfil from "./Perfil/Perfil";
import RegisterPage from "./Login/RegisterPage";
import { useEffect,useState } from "react";
import { useJwt } from "react-jwt";
import Payment from "./components/payment/Payment";



function App() {

  const [usuario, setUsuario] = useState("")
  const [actualizar,setActualizar] =useState(false)
  const { decodedToken } = useJwt(localStorage.getItem("Upmn"));

  const optionGet = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Barrer",
    },
  };

  useEffect(() => {
    if(decodedToken&&localStorage.getItem("Upmn"))fetch("https://free-q3yd.vercel.app/user/"+decodedToken._id,optionGet).then(r=>r.json()).then(c=>setUsuario(c))
    if(!localStorage.getItem("Upmn"))setUsuario(null)
  }, [decodedToken,actualizar,localStorage.getItem("Upmn")])


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home usuarioJWT={usuario} actualizar={actualizar} setActualizar={setActualizar}/>}/>
      <Route path="/:filtro" element={<Filtro usuarioJWT={usuario} actualizar={actualizar} setActualizar={setActualizar}/>}/>
      <Route path="/registro" element={<RegisterPage actualizar={actualizar} setActualizar={setActualizar}/>}/>
      <Route path="/login" element={<LoginPage actualizar={actualizar} setActualizar={setActualizar}/>}/>
      <Route path="/perfil" element={<Perfil usuario={usuario} actualizar={actualizar} setActualizar={setActualizar}/>}/>
      <Route path="/detalle/:id" element={<Detail usuario={usuario} actualizar={actualizar} setActualizar={setActualizar}/>}/>
      <Route path="/cpm" element={<Compra/>}/>
      <Route path="/payment" element={<Payment usuario={usuario} actualizar={actualizar} setActualizar={setActualizar}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
