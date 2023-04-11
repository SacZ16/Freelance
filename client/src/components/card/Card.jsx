import "./Card.css";
import vino from "./vino.svg";
import heart from "./heart.svg";
import masboton from "./masboton.svg";
import lupa from "./lupa.svg";
export default function Card() {
  return (
    <main style={{background:'white'}}>
      <section className="container-section1-card">
        <section className="container-section1-icons-card">
          <img
            style={{ position: "relative", zIndex: 100 }}
            src={heart}
            alt="heart"
          />
          <img
            style={{ position: "relative", zIndex: 100 }}
            src={masboton}
            alt="masboton"
          />
          <img
            style={{ position: "relative", zIndex: 100 }}
            src={lupa}
            alt="lupa"
          />
        </section>
        <div className="img-card">
          <img src={vino} alt="vino" />
        </div>
      </section>
      <section className="container-section2-card">
        <div className="text-section1-card">
          <p className="titulo-card">Caja de 6 unidades</p>
        </div>
        <div className="contenedor-detalle-card">
          <div className="text2-section1-card">
            <p className="titulo2-card">ANGELICA ZAPATA MALBEC 2006</p>
          </div>
          <p className="precio-card">$30.000</p>
          <p className="texto-rojo-card">valor x unidad: 5.000</p>
          <p className="texto-blue-card">texto azul</p>
        </div>
      </section>
    </main>
  );
}
