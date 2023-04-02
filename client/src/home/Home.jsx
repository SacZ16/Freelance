import Card from "../components/card/Card";
import Carousel from "../components/carousel/Carousel";
import DetailEnvios from "../components/detailEnvios/DetailEnvios";
import Navbar from "../navbar/Navbar";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <div style={{background:'black',textAlign:'center',color:'white'}}>VENTA POR CAJA </div>
      <Navbar />
      <Carousel width={"90vw"} height={"30vh"} />
      <DetailEnvios />
      <section style={{display:'flex',gap:'15px'}}>
        <div style={{width:'100%',height:'20vh',background:'black'}}></div>
        <div style={{width:'100%',height:'20vh',background:'black'}}></div>
      </section>
      <section style={{ padding: "0px 20px" }}>
        <h3>VINOS</h3>
        <section className="grid-container-cards">
          {[1, 2, 3, 4].map((producto, index) => {
            return <Card />;
          })}
        </section>
      </section>
      <section style={{ padding: "0px 20px" }}>
        <h3>DESTACADOS</h3>
        <section className="grid-container-cards">
          {[1, 2, 3, 4].map((producto, index) => {
            return <Card />;
          })}
        </section>
      </section>
    </main>
  );
}
