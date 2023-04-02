import "./Card.css";

export default function Card() {
  return (
    <main>
      <section className="container-section1-card">
        <section className="container-section1-icons-card">
          <div>❤️</div>
          <div>😶</div>
          <div>😶</div>
        </section>
        <div className="img-card">img</div>
        <div className="text-section1-card">Texto</div>
      </section>
      <section className="container-section2-card">
        <p>Titulo</p>
        <p>Precio</p>
        <p>texto rojo</p>
        <p>texto azul</p>
      </section>
    </main>
  );
}
