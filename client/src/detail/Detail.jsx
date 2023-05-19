import Carousel from "../components/carousel/Carousel";
import Navbar from "../navbar/Navbar";
import mediaEstrella from "./mediaEstrella.svg";
import estrella from "./estrella.svg";
import "./Detail.css";
import Card from "../components/card/Card";
import Footer2 from "../home/Footer2";
import flecha from "./flecha.svg";
import estrellaRoja from "./estrellaRoja.svg";
import corazon from "../components/card/heart.svg";
import corazon2 from "../components/card/heart2.svg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detail({ usuario, actualizar, setActualizar }) {
  const { id } = useParams();

  const [producto, setProducto] = useState("");

  const navigate = useNavigate()

  const [random, setRandom] = useState("")

  const optionGet = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Barrer",
    },
  };
const [actualizardetail, setActualizardetail] = useState(false)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    fetch("https://free-q3yd.vercel.app/product/" + id, optionGet).then(async (r) => {
      console.log(r.status);
      if (r.status !== 200) {
        return alert("ese producto no existe");
      }
      const respuesta = await r.json();
      console.log(respuesta);
      setProducto(respuesta);
    });
    getRandomProducts()
  }, [actualizardetail]);

  const getRandomProducts = () => {
    fetch("https://free-q3yd.vercel.app/products/random", optionGet).then(r => r.json()).then(r => setRandom(r))
  }

  const addFav = (id, idU) => {
    if (usuario === "login") {
      return swal(
        "Error",
        "Debes iniciar sesión para agregar " + titulo + " a favoritos",
        "warning"
      );
    }
    fetch("https://free-q3yd.vercel.app/fav/add", {
      method: "POST",
      body: JSON.stringify({
        idProduct: id,
        idUser: idU,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then((r) => {
      console.log(r.status);
      if (r.status === 200) {
        setActualizar(!actualizar);
        swal("Exito", `${producto.titulo} agregado a favoritos`, "success");
      } else swal("Error", "Ha occurrido un error inesperado", "error");
    });
  };

  const removeFav = (id, idU) => {
    fetch("https://free-q3yd.vercel.app/fav/remove", {
      method: "PUT",
      body: JSON.stringify({
        idProduct: id,
        idUser: idU,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then((r) => {
      console.log(r.status);
      if (r.status === 200) {
        setActualizar(!actualizar);
        swal("Exito", `${producto.titulo} eliminado de favoritos`, "success");
      } else swal("Error", "Ha occurrido un error inesperado", "error");
    });
  };

  const changeFav = () => {
    if (!usuario)
      return swal(
        "Error",
        "Debes iniciar sesion para agregar un producto a favoritos",
        "error"
      );
    if (usuario.favoritos.map((e) => e._id).includes(id)) {
      console.log("remove");
      return removeFav(id, usuario._id);
    }
    console.log("add");
    return addFav(id, usuario._id);
  };

  let botExp = document.querySelectorAll(".btn-expandir")
  let textExp = document.querySelectorAll(".texto_expandir")

  // botExp.forEach((e, c) => {
  //   e.addEventListener('click', () => {
  //     console.log('hola')
  //     textExp[c].classList.toggle("abrir_cerrar")
  //   })
  // })
  const [first, setfirst] = useState(false)
  return (
    <div>
      <div className="ventaporcaja-detail">
        <p className="ventaporcaja-letra-detail">
          VENTA POR CAJA EXCLUSIVAMENTE
        </p>
      </div>
      <Navbar usuario={usuario}  actualizar={actualizar} setActualizar={setActualizar}/>
      <div style={{ width: "95vw", margin: "auto" }}>
        <section style={{ display: "flex" }}>
          <section style={{ width: "50vw", height: "80vh" }}>
            {producto && (
              <Carousel
                width={"40vw"}
                height={"100%"}
                fix={false}
                array={producto.imagenes}
              />
            )}
          </section>
          <section>
            <h1 className="title-detail">{producto.titulo}</h1>
            <h3 className="precio-detail">${producto.precio} (caja)</h3>
            <h4 className="subtitle-detail">
              ${producto.valorunidad} (unidad)
            </h4>
            <section className="section-detail">
              <img width={35} alt="none" src={estrella} />
              <img width={35} alt="none" src={estrella} />
              <img width={35} alt="none" src={estrella} />
              <img width={35} alt="none" src={estrella} />
              <img width={35} alt="none" src={mediaEstrella} />
              <span className="span-opiniones-detail">(21 Opiniones)</span>
            </section>
            <h4 className="caracteristicas-detail">Características</h4>

            <li className="li-detail">
              <span style={{ color: "#197799" }}>Tipo de vino: </span>
              {producto.caracteristicas?.tipo}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Origen: </span>
              {producto.caracteristicas?.origen}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Provincia: </span>
              {producto.caracteristicas?.provincia}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Localidad: </span>
              {producto.caracteristicas?.localidad}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Altura: </span>
              {producto.caracteristicas?.altura}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Guarda: </span>
              {producto.caracteristicas?.guarda}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Uva: </span>
              {producto.caracteristicas?.uva}
            </li>
            <li className="li-detail">
              <span style={{ color: "#197799" }}>Cosecha: </span>
              {producto.caracteristicas?.cosecha}
            </li>
            <section className="section-contador-stock-detail">
              <button>-</button>
              <span> 1 </span>
              <button>+</button>
            </section>
            <button className="comprar-detail">COMPRAR</button>
            <section style={{ marginTop: "10px", marginBottom: "75px" }}>
              
              <div
                className="section-detalle-op-detail"
                onClick={() => changeFav()}
              >
                {" "}
                <div>
                  {usuario && usuario.favoritos.map((e) => e._id).includes(id)
                    ? "Quitar de favoritos"
                    : "Añadir a favoritos"}{" "}
                </div>
                <span>
                  {usuario &&
                  usuario.favoritos.map((e) => e._id).includes(id) ? (
                    <img width={25} src={corazon} alt="none" />
                  ) : (
                    <img width={25} src={corazon2} alt="none" />
                  )}
                </span>
              </div>
              <div className="section-detalle-op-detail">
                <div>Opiniones </div>
                <span>
                  <img width={25} src={estrellaRoja} alt="none" />
                </span>
              </div>
              <div className="section-detalle-op-detail" onClick={()=>setfirst(!first)}>
                <section >
                <div className="btn-expandir">Detalle</div>
                <section className="texto_expandir" style={first?{margin:'0',maxHeight:'1000px'}:{margin:'0',maxHeight:'0'}}>{producto.descripcion?.split("\n").map((ren) => {
                  return <p>{ren}</p>
                })}</section>
                </section>
                <span style={{postion:'absolute',top:'10px',right:'15px'}}>
                  <img width={25} src={flecha} alt="none" />
                </span>
              </div>
            </section>
          </section>
        </section>
        <section style={{ marginBottom: "30px" }}>
          <h1 className="recomendado-detail">TE RECOMENDAMOS</h1>
          <section className="grid-container-cards">
            {random&&random.map((producto, index) => {
              return (<div onClick={()=>setActualizardetail(!actualizardetail)}>
                <Card key={producto._id}
              id={producto._id}
              usuarioJWTCAR={usuario?usuario.carrito.map(e=>e._id).includes(producto._id):false}
              usuarioJWTFAV={usuario?usuario.favoritos.map(e=>e._id).includes(producto._id):false}
              usuario={usuario?usuario:"login"}
              actualizar={actualizar} setActualizar={setActualizar}
              titulo={producto.titulo}
              precio={producto.precio}
              valorUnidad={producto.valorunidad}
              unidades={producto.unidades}
              categoria={producto.categoria.nombre}
              imagen={producto.imagenes[0]}/>
            </div>);
            })}
          </section>
        </section>
        <Footer2 />
        </div>
        </div>
        );
}
