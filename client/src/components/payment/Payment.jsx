import React, { useEffect, useState } from 'react'

export default function Payment({usuario, actualizar, setActualizar}) {
    
    const [cart, setCart] = useState("")

    useEffect(() => {
        usuario.carrito && setCart(usuario.carrito)
    },[])
    

    // Traer carrito
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
        <button onClick={() => console.log(cart)}>OK</button>
    </div>
  )
}
