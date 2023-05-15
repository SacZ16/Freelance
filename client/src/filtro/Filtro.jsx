import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/card/Card'
import Navbar from '../navbar/Navbar'
import { useState,useEffect } from 'react'

export default function Filtro() {
const [productos, setProductos] = useState([])

    const filtrar = useParams()

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
      if(filtrar.filtro)
      fetch("http://localhost:8080/products/filter/"+filtrar.filtro,optionGet).then(r=>r.json()).then(e=>setProductos(e))
    }, [filtrar])
    
  return (
    <div>
        <div className="ventaporcaja-home">
       <p className="ventaporcaja-letra-home">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
        <section style={{ padding: "0px 20px",maxWidth:'95vw',margin:'auto' }}>
        <h3 className="vinos-text-home">{filtrar?.filtro.toUpperCase() }</h3>
        <section className="grid-container-cards">
          {productos? productos.map((producto, index) => {
            return <Card
            titulo={producto.titulo}
            precio={producto.precio}
            valorUnidad= {producto.valorunidad}
            unidades={producto.unidades}
            categoria={producto.categoria.nombre}
            imagen={producto.imagenes[0]}
             />;
          })
        :
        <h1>No hay Productos</h1>
        }
        </section>
      </section>
    </div>
  )
}
