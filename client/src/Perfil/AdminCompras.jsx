import React, { useEffect, useState } from 'react'
import AdminCompraDetail from './AdminCompraDetail';

export default function AdminCompras() {

  const [compras, setCompras] = useState([])
  const [vercompra, setVercompra] = useState("")
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
    fetch("http://localhost:4000/compras", optionGet).then(r => r.json()).then(r => {setCompras(r);console.log(r)})
  }

  useEffect(() => {
    getCompras()
  },[])
  return (
    <div>
      {vercompra&&
      <AdminCompraDetail compras={vercompra.compra}></AdminCompraDetail>}
      
     

        {!vercompra&&
          compras?.map((e,index) => {
            return (
              <div key={e._id} onClick={()=>setVercompra({estado:'true',compra:compras[index]})}>
                <h3>Fecha: {e.fecha.slice(0,10)} | Hora: {e.fecha.slice(11,19)}</h3>
                <h3>Usuario: {e.comprador.username}</h3>
                <h3>Email: {e.comprador.email}</h3>
                <p>Total: {e.total}</p>
                <p>N° Pedido: {e.pedido}</p>
              </div>
            )
          })
        }
      </div>
  )
}
