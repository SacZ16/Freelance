import React, { useState } from "react";
import AdminSubirProducto from './AdminSubirProducto'
import AdminCompras from "./AdminCompras";
import AdminCategorias from "./AdminCategorias";
import AdminConfigurarInicio from "./AdminConfigurarInicio";
import AdminVerProductos from "./AdminVerProductos";
import swal from "sweetalert";
import {useNavigate} from "react-router-dom"
import "./Perfil.css"

export default function Admin({ usuario }) {
    const [show, setShow] = useState("compras");

    const navigate = useNavigate()
    
    return (
    <div
    style={{
      border: "1px solid black",
      borderRadius: "15px",
      width: "80vw",
      margin: "auto",
      padding: "20px",
    }}
  >
    <div
      style={{
        display: "flex",
        gap: "20px",
        width: "100%",
        justifyContent: "space-between",
        flexWrap:'wrap'
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontWeight: 900,color:'black' }} className="letra-perfil">ADMINISTRADOR</span> 
        <span>
          <span style={{ fontWeight: 900,color:'black' }} className="letra-perfil">Usuario: </span>
          <span className="letra-perfil" style={{color:'black'}}>{usuario.username}</span>
         </span>
        <span>
          <span style={{ fontWeight: 900,color:'black' }} className="letra-perfil">Email: </span>
          <span className="letra-perfil" style={{color:'black'}}>{usuario.email}</span>
        </span>
        <span>
        </span>
      </div>
      <button className="letra-perfil" style={{backgroundColor:'rgb(217 9 9)',fontWeight: 600,height:'max-content'}} onClick={()=>{localStorage.removeItem("Upmn"); swal("Cerraste Sesion","Volve Pronto!", "success"); navigate("/")}}>Cerrar sesion</button>
      
      <div style={{display:'flex',justifyContent:'space-evenly',width:'100%',marginTop:'15px'}}>
      <div style={{ display: "flex", gap: "3rem",display:'flex',flexWrap:'wrap' }}>
        <button onClick={() => setShow("compras")} className="letra-perfil">Compras</button>
        <button onClick={() => setShow("categorias")} className="letra-perfil">Categorias</button>
        <button onClick={() => setShow("inicio")} className="letra-perfil">Configurar Inicio</button>
        <button onClick={() => setShow("productos")} className="letra-perfil">Subir Productos</button>
        <button onClick={() => setShow("verproductos")} className="letra-perfil">Ver Productos</button>
      </div>
      </div>
    </div>
    <br></br>
    <hr></hr>
    <br></br>
    <div>
    {show ==="compras"?
   <AdminCompras></AdminCompras>
   :
   show==="categorias"?
   <AdminCategorias></AdminCategorias>
   :
   show==="inicio"?
   <AdminConfigurarInicio></AdminConfigurarInicio>  
   :
      show==="productos"?
      <AdminSubirProducto></AdminSubirProducto>
      :
      show==="verproductos"?
      <AdminVerProductos></AdminVerProductos>
      :
   <AdminCompras></AdminCompras>
  }
    </div>
  </div>
  )
}
