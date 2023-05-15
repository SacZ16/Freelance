import React from 'react'
import User from './User'
import Admin from './Admin'
import { useState, useEffect } from 'react'
import { Loading } from '../components/loading/Loading'
import Navbar from '../navbar/Navbar'
import Footer2 from '../home/Footer2'
import "./Perfil.css"

export default function Perfil({decodedToken}) {
  const [usuario, setUsuario] = useState("")
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
      

{/* {isAdmin ? 
<div>
<div>Nombre</div>
<div>Email</div>
<div>Compras</div>
<div>Favoritos</div>
<div>Cerrar sesion</div>
</div>
:
<div>
<div>Nombre</div>
<div>Email</div>
<div>Compras</div>
<div>Categorias</div>
<div>Editar home</div>
<div>Subir Producto</div>
<div>Cerrar sesion</div>
    </div>} */}
  <br />
<Footer2></Footer2>
    </div>
  )
}
