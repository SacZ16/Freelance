import "./DetailEnvios.css"
import envios from "./envios.svg"
import tarjetas from "./tarjetas.svg"
import free from "./free.svg"
export default function DetailEnvios({width}) {
  return (
    <section className="section-detailenvios" style={{width:width,margin:'auto'}}>
        <div className="div-detailenvios">
          <img src={envios} alt="envios"/>
          <p className="letra-envios-detailenvios">ENVIOS A TODO EL PAIS</p>
          </div>
        <div className="div3-detailenvios">
        <div className="div2-detailenvios">
          <img src={tarjetas} alt="tarjetas"/>
         <p className="letra-envios-detailenvios">PAGÁ CON TODAS TUS TARJETAS</p> 
          </div>
        </div>
        <div className="div-detailenvios">
          <img src={free} alt="free"/>
          <p className="letra-envios-detailenvios" style={{margin:'0'}}>ENVIOS GRATIS EN CABA CON COMPRAS MAYORES A 4000</p>
          </div>
    </section>
  )
}
