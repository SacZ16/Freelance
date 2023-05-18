import React from 'react'
import User from './User'
import Admin from './Admin'
import { useState, useEffect } from 'react'
import { Loading } from '../components/loading/Loading'
import Navbar from '../navbar/Navbar'
import Footer2 from '../home/Footer2'
import "./Perfil.css"
import {useJwt} from 'react-jwt'

export default function Perfil({setActualizar,actualizar,usuario}) {
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
  
    
  return (
    <div>
    <div className="ventaporcaja-login">
   <p className="ventaporcaja-letra-login">VENTA POR CAJA EXCLUSIVAMENTE</p>
    </div>
  <Navbar usuario={usuario} actualizar={actualizar} setActualizar={setActualizar}/>
  <br />
{
!usuario?
<Loading></Loading>
:
usuario.isAdmin ?
<Admin usuario={usuario} actualizar={actualizar} setActualizar={setActualizar} ></Admin>
:
<User usuario={usuario} actualizar={actualizar} setActualizar={setActualizar} ></User>
}
  <br />
<Footer2></Footer2>
    </div>
  )
}
