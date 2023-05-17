import React,{useEffect,useState} from 'react';
import Card from '../components/card/Card';
import ModificarProductoPage from './ModificarProductoPage';

export default function AdminVerProductos() {

 const [estado, setEstado] = useState("normal")
 const [productoAModificar, setProductoAModificar] = useState("")


  const optionGet = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Barrer",
    },
  };

  const optionDelete = {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      authorization: "Barrer",
    },
  };

  const deleteProduct = (id) => {
    fetch("http://localhost:8080/product/delete/" + id, optionDelete).then(r => {if ( r.status === 200){
      swal("Exito", "Producto eliminado satisfactoriamente", "success");fetch("http://localhost:8080/products", optionGet).then(r => r.json()).then(e=> setAllProducts(e))} else swal("Error", "Ha ocurrido un error inesperado", "error")
    })
  }

  const [AllProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/products", optionGet).then(r => r.json()).then(e=> setAllProducts(e))
  }, [])


  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
      {
        estado === "normal" &&
        
        AllProducts.length > 0 && AllProducts.map(producto => {
          return (
            <div>
              <div style={{display:'flex',gap:'20px'}}>

              <button onClick={() => deleteProduct(producto._id)} >X</button>
              <button onClick={() => {setEstado("modificar");setProductoAModificar(producto)}}>Modificar</button>
              </div>
              <Card
                key={producto._id}
                id={producto._id}
                  titulo={producto.titulo}
                  precio={producto.precio}
                  valorUnidad={producto.valorunidad}
                  unidades={producto.unidades}
                  categoria={producto.categoria.nombre}
                  imagen={producto.imagenes[0]}
                />
              </div>
          )
        })}
       { estado === "modificar" && <ModificarProductoPage productoAModificar={productoAModificar}></ModificarProductoPage>}
    </div>
  )
}
