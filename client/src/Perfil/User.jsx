import React, { useState } from "react";
import "./Perfil.css"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Card from "../components/card/Card";



export default function User({ usuario,setActualizar,actualizar}) {
  const [show, setShow] = useState("compras");

  const navigate = useNavigate()
console.log("usuario.favoritos",usuario.favoritos)
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
          <span>
            <span style={{ fontWeight: 900,color:'black' }} className="letra-perfil">Usuario: </span>
            <span className="letra-perfil" style={{color:'black'}}>{usuario.username}</span>
           </span>
          <span>
            <span style={{ fontWeight: 900,color:'black' }} className="letra-perfil">Email: </span>
            <span className="letra-perfil" style={{color:'black'}}>{usuario.email}</span>
          </span>
        </div>
        <div style={{ display: "flex", gap: "3rem",display:'flex',flexWrap:'wrap' }}>
          <button onClick={() => setShow("compras")} className="letra-perfil">Compras</button>
          <button onClick={() => setShow("favoritos")} className="letra-perfil">Favoritos</button>
        </div>
        <button onClick={()=>{localStorage.removeItem("Upmn");setActualizar(!actualizar); swal("Cerraste Sesion","Volve Pronto!", "success"); navigate('/')}}  className="letra-perfil" style={{backgroundColor:'rgb(217 9 9)',fontWeight: 600,height:'max-content'}} >Cerrar sesion</button>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div>
        {show === "compras" ? (
          <div>
            {usuario.compras.length > 0 ? (
              usuario.compras.map((e) => {
                return <div></div>;
              })
            ) : (
              <span  className="letra-perfil" style={{color:'black'}}>No hay compras</span>
            )}
          </div>
        ) : (
          <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',gap:'20px'}}>
            {usuario.favoritos.length > 0 ? (
              usuario.favoritos.map((producto) => {
                return <div>
                  <Card key={producto._id}
            usuarioJWTFAV={usuario?usuario.favoritos.map(e=>e._id).includes(producto._id):false}
            usuario={usuario?usuario:"login"}
            usuarioJWTCAR={usuario?usuario.carrito.map(e=>e._id).includes(producto._id):false}
            actualizar={actualizar} setActualizar={setActualizar}
            id={producto._id}
            titulo={producto.titulo}
            precio={producto.precio}
            valorUnidad={producto.valorunidad}
            unidades={producto.unidades}
            categoria={producto.categoria.nombre}
            imagen={producto.imagenes[0]}/>
                </div>;
              })
            ) : (
              <span className="letra-perfil" style={{color:'black'}}>No hay favoritos</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
