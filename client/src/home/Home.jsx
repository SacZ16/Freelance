import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import DetailEnvios from "../components/detailEnvios/DetailEnvios";
import Navbar from "../navbar/Navbar";
import vinos from "./vinos.svg"
import mascota from "./mascota.svg"
import avatar from "./avatar.svg" 
import whatsapp from "./whatsapp.svg"
import ig from "./ig.svg"
import spotify from "./spotify.svg"
import visa from "./visa.svg"
import mastercard from "./mastercard.svg"
import american from "./american.svg"
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div className="ventaporcaja-home">
       <p className="ventaporcaja-letra-home">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <Carousel width={"90vw"} height={"50vh"} />
      <DetailEnvios  width={"90vw"}/>
      <section style={{display:'flex',gap:'15px',justifyContent:'center'}}>
        <img src={vinos} alt="vinos"/>
        <img src={vinos} alt="vinos"/>
      </section>
      <section style={{ padding: "0px 20px",maxWidth:'95vw',margin:'auto' }}>
        <h3 className="vinos-text-home">VINOS</h3>
        <section className="grid-container-cards">
          {[1, 2, 3, 4].map((producto, index) => {
            return <Card />;
          })}
        </section>
      </section>
      <section className="section-destacados-home">
        <h3 className="destacados-text-home">DESTACADOS</h3>
        <section className="grid-container-cards">
          {[1, 2, 3, 4].map((producto, index) => {
            return <Card />;
          })}
        </section>
      </section>
      <section className="section3-mascota-home">
      <img style={{height:'270px'}} src={mascota} alt="mascota"/>
      </section>
      <section className="section4-sub-home">
        <input type="email" className="input-sub-home" placeholder="ingresa tu correo electrónico"/>
        <button className="button-sub-home">SUSCRIBIRME</button>
      </section>
      <section className="section5-comunidad-home">
        <p className="comunidad-home">Comunidad PMN</p>
        <section className="subsection5-comunidad-home">
          <div className="div-comunidad-home">
            <img className="avatar-home" src={avatar} alt="avatar"/>
            <p className="comentario-comunidad-home">Fácil de comprar y con buenas ofertas. Para guardar una de las mejores plataformas</p>
          </div>
          <div className="div-comunidad-home">
            <img className="avatar-home" src={avatar} alt="avatar"/>
            <p className="comentario-comunidad-home">Fácil de comprar y con buenas ofertas. Para guardar una de las mejores plataformas</p>
          </div>
          <div className="div-comunidad-home">
            <img className="avatar-home" src={avatar} alt="avatar"/>
            <p className="comentario-comunidad-home">Fácil de comprar y con buenas ofertas. Para guardar una de las mejores plataformas</p>
          </div>
        </section>
      </section>
      <section className="section6-home">
        <p className="ig-home">@pmnwines</p>
        <section className="sub-section-ig-home">
        <div className="div-ig-home"></div>
        <div className="div-ig-home"></div>
        <div className="div-ig-home"></div>
        <div className="div-ig-home"></div>
        </section>
      </section>
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
    </main>
  );
}
