import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import DetailEnvios from "../components/detailEnvios/DetailEnvios";
import Navbar from "../navbar/Navbar";
import vinos from "./vinos.svg"
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
    </main>
  );
}
