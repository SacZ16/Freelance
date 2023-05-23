import React, { useEffect, useState } from 'react'
import Mp from './Mp'

export default function Payment({usuario, actualizar, setActualizar}) {
    
    const [cart, setCart] = useState([])
    const [carritoAComprar,setCarritoAComprar]=useState([])
    const [loading, setloading] = useState(false)
    const [pagar, setPagar] = useState(false)

    const optionGet = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Barrer",
        },
      };

    useEffect(() => {
        usuario.carrito && setCart(usuario.carrito)
        console.log({usuario})
        if(usuario){
            let test= usuario.carrito.map(producto=>({id:producto._id,titulo:producto.titulo,precio:producto.precio,imagen:producto.imagenes[0],stock:1}))
            setCarritoAComprar(test)
            console.log({test})
        }
    },[usuario])

    useEffect(() => {
      console.log({carritoAComprar})
    }, [carritoAComprar])
    
const nextStock=(estock,index,eprecio)=>{
    setloading(!loading)
    let temp=carritoAComprar
    temp[index]={...temp[index],stock:estock+1}
    temp[index]={...temp[index],precio:Number((eprecio+"").replace('.', ''))*(estock+1)}
    setCarritoAComprar(temp)
}
const prevStock=(estock,index,eprecio)=>{
    setloading(!loading)
    let temp=carritoAComprar
    temp[index]={...temp[index],stock:estock-1}
    temp[index]={...temp[index],precio:Number((eprecio+"").replace('.', ''))*(estock-1)}
    setCarritoAComprar(temp)
}

    // Traer carrito✅
    // Validar stock del producto
    // Sumar todos los precios
    // si no esta en stock debe estar como disable
    // poder modificar cuantos productos quiere en el carrito y validar que exista el stock
    // inputs para poner la direccion de envio
    // cobrar 60k
    // despues traer mercado pago
    // agregar a precio total un precio de envio $1000 default , en perfil luego se pueda cambiar
  return (
    <div>
        <div>
            {
                carritoAComprar?.map(((e,index) => {
                    return (
                        <div>
                        <h3>{e.titulo}</h3>
                        <p>{e.precio.toLocaleString("es-AR", {
                        currency: "ARS",
                        style: "currency",
                      })}</p>
                        <img src={e.imagen} alt='not found' height={120} width={90}></img>
                        <button disabled={e.stock<1} onClick={()=>prevStock(e.stock,index,cart[index].precio)}>-</button><span>{e.stock}</span><button onClick={()=>nextStock(e.stock,index,cart[index].precio)} >+</button>
                        </div>
                    )
                }))
            }
        </div>
        total:{carritoAComprar.length>0&&carritoAComprar?.map(e=>(Number((e.precio+"").replace('.', '')))).reduce((a, b) => a + b, 0).toLocaleString("es-AR", {
                        currency: "ARS",
                        style: "currency",
                      })}
        <button onClick={()=>setPagar(true)}>Completar compra</button>
        {pagar&&<Mp usuario={usuario} productos={carritoAComprar} amount={carritoAComprar?.map(e=>(Number((e.precio+"").replace('.', '')))).reduce((a, b) => a + b, 0)}></Mp>}
    </div>
  )
}
