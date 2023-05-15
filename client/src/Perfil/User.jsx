import React, { useState } from "react";
import "./Perfil.css"
export default function User({ usuario }) {
  const [show, setShow] = useState("compras");
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
        <button className="letra-perfil">Cerrar sesion</button>
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
          <div>
            {usuario.favoritos.length > 0 ? (
              usuario.favoritos.map((e) => {
                return <div></div>;
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
