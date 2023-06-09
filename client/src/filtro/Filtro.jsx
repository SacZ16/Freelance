import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card/Card";
import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
import { Loading } from "../components/loading/Loading";

export default function Filtro({usuarioJWT,setActualizar,actualizar}) {
  const [productos, setProductos] = useState("");

  const filtrar = useParams();

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
    if (filtrar.filtro)
      fetch(
        "https://free-q3yd.vercel.app/products/filter/" + filtrar.filtro,
        optionGet
      )
        .then(async(r) =>{
          if(r.status===200){
            const response = await r.json()
            setProductos(response)
          }
        })
  }, [filtrar]);

  return (
    <div>
      <div className="ventaporcaja-home">
        <p className="ventaporcaja-letra-home">VENTA POR CAJA EXCLUSIVAMENTE</p>
      </div>
      <Navbar usuario={usuarioJWT}  actualizar={actualizar} setActualizar={setActualizar}/>
      <section
        style={{ padding: "0px 20px", maxWidth: "95vw", margin: "auto" }}
      >
        <h3 className="vinos-text-home">{filtrar?.filtro.toUpperCase()}</h3>
        <section className="grid-container-cards">
          {productos.length > 0 ? (
            productos.map((producto) => {
              return (
                <Card
                  key={producto._id}
                  usuarioJWTFAV={usuarioJWT?usuarioJWT.favoritos.map(e=>e._id).includes(producto._id):false}
                  usuario={usuarioJWT?usuarioJWT:"login"}
                  usuarioJWTCAR={usuarioJWT?usuarioJWT.carrito.map(e=>e._id).includes(producto._id):false}
                  actualizar={actualizar} setActualizar={setActualizar}
                  id={producto._id}
                  titulo={producto.titulo}
                  precio={producto.precio}
                  valorUnidad={producto.valorunidad}
                  unidades={producto.unidades}
                  categoria={producto.categoria.nombre}
                  imagen={producto.imagenes[0]}
                />
              );
            })
          ) : 
          productos.length === 0 && typeof productos !== "string"?
          <p>no hay productos</p>
          :
            <Loading></Loading>
          }
        </section>
      </section>
    </div>
  );
}
