import React from 'react'
import { initMercadoPago } from '@mercadopago/sdk-react';
import { CardPayment } from '@mercadopago/sdk-react';
import { StatusScreen } from '@mercadopago/sdk-react';
import { useState } from 'react';

export default function Mp({amount,productos,usuario}) {  
      initMercadoPago("TEST-671c1093-546b-4612-ad3b-4284df9366d9");
const initialization = {
 amount: amount,
};
const [initializationstatus, setinitializationstatus] = useState({paymentId:"1314601233"})

const onSubmit = async (formData) => {
 // callback llamado al hacer clic en el botón enviar datos
 return new Promise((resolve, reject) => {
   fetch('https://free-q3yd.vercel.app/process_payment', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({formData:formData,productos:productos, userid: usuario._id}),
   })
     .then(response => response.json())
     .then((response) => {
       // recibir el resultado del pago
       console.log({"pagado":response})
       setinitializationstatus({paymentId:response.id})
       resolve();
     })
     .catch((error) => {
       // manejar la respuesta de error al intentar crear el pago
       console.log({"sinpagar":error})
       reject();
     });
 });
};


const onError = async (error) => {
 // callback llamado para todos los casos de error de Brick
 console.log(error);
};


const onReady = async () => {
 /*
   Callback llamado cuando Brick está listo.
   Aquí puedes ocultar cargamentos de su sitio, por ejemplo.
 */
};
  return (
    <div>
numero : 4509 9535 6623 3704
seguridad : 123
fechas : 11/25
<CardPayment
   initialization={initialization}
   onSubmit={onSubmit}
   onReady={onReady}
   onError={onError}
/>
    </div>
  )
}
