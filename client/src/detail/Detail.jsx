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
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Detail() {

  const {id} = useParams()

  const [producto, setProducto] = useState("")

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
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  
  useEffect(() => {
    fetch("http://localhost:8080/product/"+ id , optionGet).then(async r =>{
      console.log(r.status)
      if(r.status !==200){
        return alert("ese producto no existe")
      }
      const respuesta= await r.json()
      console.log(respuesta)
      setProducto(respuesta)
    })
  }, [])



  return (
    <div>        
      <div className="ventaporcaja-detail">
       <p className="ventaporcaja-letra-detail">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <div style={{width:'95vw',margin:'auto'}}>
      <section style={{display:'flex'}}>      
        <section style={{width:'50vw',height:'80vh'}}>
      {producto&&<Carousel width={"40vw"} height={"100%"} fix={false} array={producto.imagenes}/>}
            </section>  
      <section>
        <h1 className="title-detail">{producto.titulo}</h1>
        <h3 className="precio-detail">${producto.precio} (caja)</h3>
        <h4 className="subtitle-detail">${producto.valorunidad} (unidad)</h4>
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
        
          <li className="li-detail"><span style={{color:'#197799'}}>Tipo de vino: </span>{producto.caracteristicas?.tipo}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Origen: </span>{producto.caracteristicas?.origen}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Provincia: </span>{producto.caracteristicas?.provincia}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Localidad: </span>{producto.caracteristicas?.localidad}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Altura: </span>{producto.caracteristicas?.altura}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Guarda: </span>{producto.caracteristicas?.guarda}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Uva: </span>{producto.caracteristicas?.uva}</li>
          <li className="li-detail"><span style={{color:'#197799'}}>Cosecha: </span>{producto.caracteristicas?.cosecha}</li>
        
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
