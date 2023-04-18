import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import DetailEnvios from "../components/detailEnvios/DetailEnvios";
import Navbar from "../navbar/Navbar";
import vinos from "./vinos.svg"
import mascota from "./mascota.svg"
import avatar from "./avatar.svg" 
import "./Home.css";
import Footer2 from "./Footer2";

export default function Home() {
  return (
    <main>
      <div className="ventaporcaja-home">
       <p className="ventaporcaja-letra-home">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <Carousel width={"90vw"} height={"50vh"} fix={true}/>
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
      <Footer2></Footer2>
    </main>
  );
}
