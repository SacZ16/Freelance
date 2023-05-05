import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Login.css"
import DetailEnvios from '../components/detailEnvios/DetailEnvios'
import { Link } from 'react-router-dom'

export default function Login2() {
  return (
    <div>
        <div className="ventaporcaja-login">
       <p className="ventaporcaja-letra-login">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <div style={{display:'flex'}}>
        <div style={{width:'40%',padding:'30px'}}>
            <h1 className='login1-h1'>QUE BUENO, VOLVISTE</h1>
            <span className='login2-span'>Al ingresar vas a encontrar productos seleccionados, tus preferidos, los puntos ganados para canjear, descuentos y mucho más.</span>
        <div style={{display:'flex',flexDirection:'column'}}>
            <span className='input-login-span'>CORREO ELECTRONICO</span>
            <input className='input-login2' type="text" />
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'50px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <span className='input-login-span'>CORREO ELECTRONICO</span>
            <span className='input-login-span'>¿Olvidaste tu contraseña?</span>
            </div>
            <input className='input-login2' type="text" />
        </div>
                    <button className='button-login2'>INGRESAR</button>
                    <span className='login2-span2'>Al hacer clic en cualquiera de los botones de inicio de sesión social, acepta los términos de la política de privacidad que se describen aquí.</span>
        </div>
        <div style={{width:'60%',padding:'30px'}}>
            <h1 className='login1-h1'>PRIMERA VEZ EN PMNWINE?</h1>
            <span className='login2-span'>Crear una cuenta es gratis y simple, vas a poder ganar puntos, encontrar descuentos exclusivos y oportunidades únicas.</span>
       
       <div style={{marginTop:'20px'}}>

        <DetailEnvios  width={"100%"}/>
       </div>
                    <Link to="/registro" style={{textDecoration:'none'}}><button style={{marginTop:'80px'}} className='button-login2'>INGRESAR</button></Link>
        </div>
      </div>
    </div>
  )
}
