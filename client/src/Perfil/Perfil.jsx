import React from 'react'
import User from './User'
import Admin from './Admin'
import { useState, useEffect } from 'react'
import { Loading } from '../components/loading/Loading'
import Navbar from '../navbar/Navbar'
import Footer2 from '../home/Footer2'
import "./Perfil.css"
import {useJwt} from 'react-jwt'

export default function Perfil() {
  const [usuario, setUsuario] = useState("")
  const { decodedToken } = useJwt(localStorage.getItem("Upmn"));
console.log("params perfil",decodedToken)
console.log({usuario})
    //use fect para ver si es admin
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
      if(decodedToken)fetch("http://localhost:8080/user/"+decodedToken._id,optionGet).then(r=>r.json()).then(c=>setUsuario(c))
    }, [decodedToken])
    
  return (
    <div>
    <div className="ventaporcaja-login">
   <p className="ventaporcaja-letra-login">VENTA POR CAJA EXCLUSIVAMENTE</p>
    </div>
  <Navbar />
  <br />
{
!usuario?
<Loading></Loading>
:
usuario.isAdmin ?
<Admin usuario={usuario}></Admin>
:
<User usuario={usuario}></User>
}
  <br />
<Footer2></Footer2>
    </div>
  )
}
