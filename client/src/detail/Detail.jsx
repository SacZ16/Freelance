import Carousel from "../components/carousel/Carousel"
import Navbar from "../navbar/Navbar"
import mediaEstrella from "./mediaEstrella.svg"
import estrella from "./estrella.svg"
import "./Detail.css"
import Card from "../components/card/Card"
import Footer2 from "../home/Footer2"
import flecha from "./flecha.svg"
import estrellaRoja from "./estrellaRoja.svg"
import corazon from "../components/card/heart.svg"

export default function Detail() {
  return (
    <div>        
      <div className="ventaporcaja-detail">
       <p className="ventaporcaja-letra-detail">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <div style={{width:'95vw',margin:'auto'}}>
      <section style={{display:'flex'}}>      
        <section style={{width:'50vw',height:'80vh'}}>
      <Carousel width={"40vw"} height={"100%"} fix={false}/>
            </section>  
      <section>
        <h1 className="title-detail">ANGELICA ZAPATA MALBEC 2006</h1>
        <h3 className="precio-detail">$30.000</h3>
        <h4 className="subtitle-detail">PRECIO POR BOTELLA: $5.000</h4>
        <section className="section-contador-stock-detail">
          <button>-</button>
          <span> 1 </span>
          <button>+</button>
        </section>
        <section className="section-detail" >
          <img width={35} alt="none" src={estrella}/>
          <img width={35} alt="none" src={estrella}/>
          <img width={35} alt="none" src={estrella}/>
          <img width={35} alt="none" src={estrella}/>
          <img width={35} alt="none" src={mediaEstrella}/>
          <span className="span-opiniones-detail">(21 Opiniones)</span>
        </section>
        <h4 className="caracteristicas-detail">Características</h4>
        
          <li className="li-detail"><span style={{color:'#197799'}}>Tipo de vino: </span>Tinto</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Origen: </span>Argentina</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Provincia: </span>Mendoza</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Localidad: </span>Las compuertas y la Consulta</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Altura:</span></li>
          <li className="li-detail"><span style={{color:'#197799'}}>Guarda: </span>JOVEN- CRIANZA -RESERVA- GRAN RESERVA</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Uva: </span>Malbec (69%),Cabernet sauvignon (31%)</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Cosecha: </span>2006</li>
        
      <button className="comprar-detail">COMPRAR</button>
      <section style={{marginTop:'10px',marginBottom:'75px'}}>
       <div className="section-detalle-op-detail"><div>Detalle </div><span><img width={25} src={flecha} alt="none"/></span></div> 
       <div className="section-detalle-op-detail"> <div>Preferidos </div><span><img width={25} src={corazon} alt="none"/></span></div>
        <div className="section-detalle-op-detail"><div>Opiniones </div><span><img width={25} src={estrellaRoja} alt="none"/></span></div>
      </section>
      </section>
      </section>
      <section style={{marginBottom:'30px'}}>
        <h1 className="recomendado-detail">TE RECOMENDAMOS</h1>
        <section className="grid-container-cards">
          {[1, 2, 3, 4].map((producto, index) => {
            return <Card />;
          })}
        </section>
      </section>
      <Footer2/>
      </div>
    </div>
  )
}
