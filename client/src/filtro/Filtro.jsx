import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/card/Card'
import Navbar from '../navbar/Navbar'

export default function Filtro() {
    const filtrar= useParams()
    console.log(filtrar)
  return (
    <div>
        <div className="ventaporcaja-home">
       <p className="ventaporcaja-letra-home">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
        <section style={{ padding: "0px 20px",maxWidth:'95vw',margin:'auto' }}>
        <h3 className="vinos-text-home">{filtrar?.filtro.toUpperCase() }</h3>
        <section className="grid-container-cards">
          {[1, 2, 3, 4].map((producto, index) => {
            return <Card />;
          })}
        </section>
      </section>
    </div>
  )
}
