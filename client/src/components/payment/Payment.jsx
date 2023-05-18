import React, { useEffect, useState } from 'react'

export default function Payment({usuario, actualizar, setActualizar}) {
    
    const [cart, setCart] = useState([])
    const [carritoAComprar,setCarritoAComprar]=useState([])
    const [loading, setloading] = useState(false)

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
    
const nextStock=(estock,index)=>{
    setloading(true)
    let temp=carritoAComprar
    temp[index]={...temp[index],stock:estock+1}
    setCarritoAComprar(temp)
    setloading(false)
    console.log({carritoAComprar})
    console.log(temp,index )
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
                        <h3>{carritoAComprar[index].titulo}</h3>
                        <p>{carritoAComprar[index].precio}</p>
                        <img src={carritoAComprar[index].imagen} alt='not found' height={120} width={90}></img>
                        <button>-</button>{`${loading}`}{loading?carritoAComprar[index].stock +"t":carritoAComprar[index].stock+ "y"}<button onClick={()=>nextStock(carritoAComprar[index].stock,index)} >+</button>
                        </div>
                    )
                }))
            }
        </div>
        <button onClick={()=>console.log(carritoAComprar)}>sda</button>
    </div>
  )
}
