import React,{useEffect,useState} from 'react';
import Card from '../components/card/Card';

export default function AdminVerProductos() {

  const optionGet = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Barrer",
    },
  };

  const [AllProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/products", optionGet).then(r => r.json()).then(e=> setAllProducts(e))
  }, [])
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      {
        AllProducts.length > 0 && AllProducts.map(producto => {
          return (
            <div>
              <Card
                key={producto._id}
                  titulo={producto.titulo}
                  precio={producto.precio}
                  valorUnidad={producto.valorunidad}
                  unidades={producto.unidades}
                  categoria={producto.categoria.nombre}
                  imagen={producto.imagenes[0]}
                />
              </div>
          )
        })
      }
    </div>
  )
}
