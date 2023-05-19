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
    fetch("https://free-q3yd.vercel.app/product/delete/" + id, optionDelete).then(r => {if ( r.status === 200){
      swal("Exito", "Producto eliminado satisfactoriamente", "success");fetch("https://free-q3yd.vercel.app/products", optionGet).then(r => r.json()).then(e=> setAllProducts(e))} else swal("Error", "Ha ocurrido un error inesperado", "error")
    })
  }

  const [AllProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch("https://free-q3yd.vercel.app/products", optionGet).then(r => r.json()).then(e=> setAllProducts(e))
  }, [])


  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',gap:'20px'}}>
      {
        estado === "normal" &&
        
        AllProducts.length > 0 && AllProducts.map(producto => {
          return (
            <div style={{padding:'10px',border:'1px solid black',borderRadius:'10px'}}>
              <div style={{display:'flex',justifyContent:'space-around'}}>

              <button onClick={() => deleteProduct(producto._id)} >X</button>
              <button onClick={() => {setEstado("modificar");setProductoAModificar(producto)}}>Modificar</button>
              </div>
              <hr />
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
