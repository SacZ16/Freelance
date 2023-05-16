import Card from "../components/card/Card";
import { useEffect, useState } from "react";
import Carousel from "../components/carousel/Carousel";
import DetailEnvios from "../components/detailEnvios/DetailEnvios";
import Navbar from "../navbar/Navbar";
// import vinos from "./vinos.svg"
import mascota from "./mascota.svg"
// import avatar from "./avatar.svg" 
import "./Home.css";
import Footer2 from "./Footer2";

export default function Home() {
  const [home, setHome] = useState("");
  const [elejidos, setElejidos] = useState("");

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
    if (home?.elegidos?.nombre)
      fetch(
        "http://localhost:8080/products/filter/" + home.elegidos.nombre,
        optionGet
      )
        .then(async(r) =>{
          if(r.status===200){
            const response = await r.json()
            console.log(":)",response)
             setElejidos(response)
          }
        })
  }, [home]);
  useEffect(() => {
    fetch("http://localhost:8080/home", optionGet).then(r => r.json()).then(e=> {setHome(e[0]);console.log(e)})
  }, [])

  
  return (
    <main>
      <div className="ventaporcaja-home">
       <p className="ventaporcaja-letra-home">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      {home.slice&&<Carousel width={"90vw"} height={"50vh"} fix={false} array={home?.slice}/>}
      <div className="detailenvios-media-home">
      <DetailEnvios  width={"90vw"}/>
      </div>
      <section className="section1-media-home" style={{display:'flex',gap:'15px',justifyContent:'center'}}>
        {home.posters&&
        <div style={{width:'90vw',margin:'auto',display:'flex',gap:'5px'}}>
          <img src={home.posters[0]}width={'50%'} height={300} alt="vinos"/>
        <img src={home.posters[1]} width={'50%'} height={300}alt="vinos"/>
        </div>
        }
      </section>
      <section style={{ padding: "0px 20px",maxWidth:'95vw',margin:'auto' }}>
        <h3 className="vinos-text-home">{home?.elegidos?.nombre}</h3>
        <section className="grid-container-cards">
        {elejidos&& elejidos.reverse().slice(0,4).map((producto, index) => {
            return <Card key={producto._id}
            titulo={producto.titulo}
            precio={producto.precio}
            valorUnidad={producto.valorunidad}
            unidades={producto.unidades}
            categoria={producto.categoria.nombre}
            imagen={producto.imagenes[0]}/>;
          })}
        </section>
      </section>
      <section className="section-destacados-home">
        <h3 className="destacados-text-home">DESTACADOS</h3>
        <section className="grid-container-cards">
          {home.destacados&& home.destacados.slice(0,4).map((producto, index) => {
            return <Card key={producto._id}
            titulo={producto.titulo}
            precio={producto.precio}
            valorUnidad={producto.valorunidad}
            unidades={producto.unidades}
            categoria={producto.categoria.nombre}
            imagen={producto.imagenes[0]}/>;
          })}
        </section>
      </section>
      <section className="section3-mascota-home">
      <img style={{height:'270px'}} src={mascota} alt="mascota"/>
      </section>
      <div className="detailenvios-media-home">
      <Footer2></Footer2>
      </div>
    </main>
  );
}
