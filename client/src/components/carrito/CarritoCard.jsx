import React from "react";
import close from "./close.svg";
import swal from "sweetalert";
import { Link } from "react-router-dom";

export default function CarritoCard({ setEstadoCarrito, usuario, actualizar, setActualizar }) {
  // document.body.classList.add('no-scroll')


  const removeFromCart = (id, idU,) => {
    fetch("http://localhost:4000/cart/remove", {
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
      },}).then(r =>{console.log(r.status);if(r.status === 200){setActualizar(!actualizar);swal("Exito",`Eliminado de tu carrito`,"success")}  else swal("Error", "Ha occurrido un error inesperado", "error")  })
  }



  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        zIndex: "1231",
        top: "0",
        left:'0',
        alignItems: "center",
        background: "#00000096",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          position: "absolute",
          border: "4px solid transparent",
          zIndex: "10210300",
          maxWidth: "360px",
          width: "100vw",
          height: "90vh",
          background: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            paddingBottom: "10px",
          }}
        >
          <img
            onClick={() => {
              setEstadoCarrito(false);
              document.body.classList.remove("no-scroll");
            }}
            style={{ position: "relative", zIndex: 100, cursor: "pointer" }}
            src={close}
            alt="close"
          />
        </div>
        <div
          style={{
            padding: "10px",
            overflow: "auto",
            height: "100%",
            width: "calc(100% - 20px)",
            overflowX: "hidden",
            display: "flex",
            gap: "15px",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          {usuario &&
            usuario.carrito.map((e) => {
              return (
                <div
                  style={{
                    padding: "5px",
                    position: "relative",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    width={70}
                    height={90}
                    src={e.imagenes[0]}
                    alt="foto"
                  ></img>
                  <img
                    style={{
                      position: "absolute",
                      zIndex: 100,
                      cursor: "pointer",
                      top: "5px",
                      right: "5px",
                    }}
                    onClick={() => removeFromCart(e._id, usuario._id)}
                    src={close}
                    alt="close"
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      height: "100%",
                    }}
                  >
                    {/* <span style={{width:'34',height:'34px'}}></span> */}
                    <span>
                      {e.titulo.slice(0, 25)}
                      {"..."}
                    </span>
                    <span>
                      ${" "}
                      {e.precio.toLocaleString("es-AR", {
                        currency: "ARS",
                        style: "currency",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/payment"><button>Comprar</button></Link>
        </div>
      </div>
    </div>
  );
}
