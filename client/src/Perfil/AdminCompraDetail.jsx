import React, { useEffect, useState } from "react";

export default function AdminCompraDetail({compras}) {

  const [compra, setCompra] = useState("");

  const optionGet = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Barrer",
    },
  };

  const getCompras = () => {
    fetch("http://localhost:4000/compra/" + compras._id, optionGet).then((r) => console.log(r))
      
  };
console.log("comrpadetail",compras)
  useEffect(() => {
    getCompras();
  }, []);
  return (
    <div>
      {/* {compras?.map((e) => {
        return (
          <div>
            <h3>
              Fecha: {e.fecha.slice(0, 10)} | Hora: {e.fecha.slice(11, 19)}
            </h3>
            <h3>Usuario: {e.comprador.username}</h3>
            <h3>Email: {e.comprador.email}</h3>
            <p>Total: {e.total}</p>
            <p>N° Pedido: {e.pedido}</p>
          </div>
        );
      })} */}
    </div>
  );
}
