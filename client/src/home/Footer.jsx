
import whatsapp from "./whatsapp.svg"
import ig from "./ig.svg"
import spotify from "./spotify.svg"
import visa from "./visa.svg"
import mastercard from "./mastercard.svg"
import american from "./american.svg"

export default function Footer() {
  return (
    <section className="section7-footer-home">
        <div className="subdiv1-footer-home">
          <div className="div-subdiv1-footer-home">
          <img src={whatsapp} alt="whatsapp"/>
          <img src={ig} alt="ig"/>
          <img src={spotify} alt="spotify"/>
          </div>
          <p>Atención de Lunes a Viernes de 9 a 18 hs.<br/>
11-0000-0000</p>
        </div>
        <div className="subdiv2-footer-home">
          <div className="subdiv2-div-footer-home" >
          <p className="subdiv2-p-footer-home">BODEGAS</p>
          <p className="subdiv2-p-footer-home">UVAS</p>
          <p className="subdiv2-p-footer-home">REGIONES</p>
          <p className="subdiv2-p-footer-home">PACKS</p>
          <p className="subdiv2-p-footer-home">DESTACADOS</p>
          </div>
        </div>
        <div className="subdiv3-footer-home">
          <p className="subdiv3-p-footer-home">FORMAS DE PAGO</p>
          <div style={{display:'flex',gap:"5px"}}>
            <img src={visa} alt="visa" />
            <img src={mastercard} alt="mastercard" />
            <img src={american} alt="american" />
          </div>
          <p className="subdiv3-p-footer-home">TRANSFERENCIA BANCARIA</p>
        </div>

      </section>
  )
}
