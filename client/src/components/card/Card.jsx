import "./Card.css";
import vino from "./vino.svg";
import heart from "./heart.svg";
import heart2 from "./heart2.svg";
import masboton from "./masboton.svg";
import carrito from "./carrito.svg";
import carrito2 from "./carrito2.svg";
import lupa from "./lupa.svg";
import swal from "sweetalert";
import {useJwt} from 'react-jwt'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ imagen, unidades, titulo, precio, valorUnidad, categoria, id, usuarioJWTFAV, usuario,setActualizar,actualizar,usuarioJWTCAR}) {

  const addFav = (id,idU) => {
    if(usuario==="login"){
      return swal("Error", "Debes iniciar sesión para agregar "+titulo+" a favoritos", "warning")
    }
    fetch("http://localhost:8080/fav/add", {
      method: "POST",
      body: JSON.stringify({
        idProduct : id,
        idUser: idU
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },}).then(r => {console.log(r.status);if(r.status === 200){setActualizar(!actualizar); swal("Exito", `${titulo} agregado a favoritos`, "success")} else swal("Error", "Ha occurrido un error inesperado", "error") })
  }

  const removeFav = (id, idU) => {
    fetch("http://localhost:8080/fav/remove", {
      method: "PUT",
      body: JSON.stringify({
        idProduct : id,
        idUser: idU
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },}).then(r => {console.log(r.status);if(r.status === 200){setActualizar(!actualizar);swal("Exito",`${titulo} eliminado de favoritos`,"success")}  else swal("Error", "Ha occurrido un error inesperado", "error")  })
  }

  const addtoCart = (id, idU) => {
    if(usuario==="login"){
      return swal("Error", "Debes iniciar sesión para agregar "+titulo+" al carrito", "warning")
    }
    fetch("http://localhost:8080/cart/add", {
      method: "POST",
      body: JSON.stringify({
        idProduct : id,
        idUser: idU
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },}).then(r => {console.log(r.status);if(r.status === 200){setActualizar(!actualizar);swal("Exito",`${titulo} agregado a tu carrito`,"success")} else if(r.status === 405){swal("Error", `${titulo} Ya fue agregado a tu carrito`, "error")} else swal("Error", "Ha occurrido un error inesperado", "error")  })
  }

  const removeFromCart = (id, idU) => {
    fetch("http://localhost:8080/cart/remove", {
      method: "PUT",
      body: JSON.stringify({
        idProduct : id,
        idUser: idU
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },}).then(r =>{console.log(r.status);if(r.status === 200){setActualizar(!actualizar);swal("Exito",`${titulo} eliminado de tu carrito`,"success")}  else swal("Error", "Ha occurrido un error inesperado", "error")  })
  }

   /* const [usuario, setUsuario] = useState("")
   const { decodedToken } = useJwt(localStorage.getItem("Upmn")); */

  // useEffect(() => {
  //   if(decodedToken)fetch("http://localhost:8080/user/"+decodedToken._id,optionGet).then(r=>r.json()).then(c=>setUsuario(c))
  // }, [decodedToken])
  
// console.log("favo",usuarioJWTFAV,titulo)
// console.log("carro",usuarioJWTCAR,titulo)
  return (
<main  style={{background:'white',width:'max-content'}}>
    <section className="container-section1-card">
        <section className="container-section1-icons-card">
          {!usuarioJWTFAV &&<img
          onClick={() => {addFav(id, usuario._id)}}
            style={{ position: "relative", zIndex: 10000,cursor:'pointer' }}
            src={heart2}
            alt="heart"
          />}
           {usuarioJWTFAV&& <img
          onClick={() => removeFav(id, usuario._id)}
            style={{ position: "relative", zIndex: 10000,cursor:'pointer' }}
            src= {heart}
            alt="heart"
          />}
          {!usuarioJWTCAR&&<img
            onClick={() => {addtoCart(id, usuario._id)}}
            style={{ position: "relative", zIndex: 10000,cursor:'pointer' }}
            src={carrito}
            alt="carrito"
          />}
           {usuarioJWTCAR&&<img
            onClick={() => removeFromCart(id, usuario._id)}
            style={{ position: "relative", zIndex: 10000,cursor:'pointer' }}
            src={carrito2}
            alt="carrito"
          />}
        </section>
        <Link to={`/detalle/${id}`} className="img-card">
          <img  width="326" height="326" src={imagen} alt="not found"/>  
        </Link>
      </section>
      <Link to={`/detalle/${id}`} className="container-section2-card">
        <div className="text-section1-card">
          <p className="titulo-card">Caja de {unidades} unidades</p>
        </div>
        <div className="contenedor-detalle-card">
          <div className="text2-section1-card">
            <p className="titulo2-card">{titulo}</p>
          </div>
          <p className="precio-card">${precio}</p>
          <p className="texto-rojo-card">valor x unidad: {valorUnidad}</p>
          <p className="texto-blue-card">{categoria}</p>
        </div>
      </Link>
       </main>
  );
}
