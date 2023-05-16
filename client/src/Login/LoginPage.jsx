import React from 'react'
import Navbar from '../navbar/Navbar'
import "./Login.css"
import { useState } from "react"
import swal from "sweetalert"
import DetailEnvios from '../components/detailEnvios/DetailEnvios'
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage({setActualizar,actualizar}) {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    console.log(formulario)
    e.preventDefault();
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit =(e)=>{
    if(e) e.preventDefault();
      if(formulario.email.length<5 || !formulario.email.includes("@")){
        return swal("Atención!",
         "Introduce un email válido para continuar",
         "warning")      
       }
       if(formulario.password.length<8){
        return swal("Atención!",
         "La contraseña debe contener al menos 8 carácteres",
         "warning")      
       }
      fetch("http://localhost:8080/user/login", {
        method: "POST",
        body: JSON.stringify({
          email: formulario.email,
          password: formulario.password,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Barrer",
        },
      }).then( async r=>{
        if(r.status===200){
          const token = await r.json()
          localStorage.setItem("Upmn",token.token)
          swal("Bienvenido",
          "Accediste a tu cuenta correctamente",
          "success")
          setActualizar(!actualizar)
          navigate("/")
        }
      if(r.status===405){
        swal("Error",
        "Parece que ese correo no se encuentra registrado",
        "error")
      }
      if(r.status===401){
        swal("Error",
        "Contraseña incorrecta",
        "error")
      }
      if(r.status===400){
        swal("Oh no!",
        "Ha ocurrido un error, intenta mas tarde!",
        "error")
      }
    });
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        onSubmit()
      }
    };
  return (
    <div>
        <div className="ventaporcaja-login">
       <p className="ventaporcaja-letra-login">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{width:'40%',padding:'30px'}}>
            <h1 className='login1-h1'>Bienvenido de vuelta!</h1>
            <span className='login2-span'>Al ingresar vas a encontrar productos seleccionados, tus preferidos, descuentos y mucho más.</span>
        <div style={{display:'flex',flexDirection:'column'}}>
            <span className='input-login-span'>CORREO ELECTRONICO</span>
            <input onKeyDown={handleKeyDown} value={formulario.email} onChange={handleChange} name="email" className='input-login2' type="text" />
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'30px'}}>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            <span className='input-login-span'>CONTRASEÑA</span>
            {/* <span className='input-login-span'>¿Olvidaste tu contraseña?</span> */}
            </div>
            <input type="password" onKeyDown={handleKeyDown} value={formulario.password} onChange={handleChange} name="password" className='input-login2'/>
        </div>
                    <button  onClick={onSubmit} className='button-login2'>INICIAR</button>
                    <Link to="/registro" style={{textDecoration:'none'}}><button style={{marginTop:'30px'}} className='button-login2'>REGISTRO</button></Link>
                    <span className='login2-span2'>Al hacer clic en cualquiera de los botones de inicio de sesión social, acepta los términos de la política de privacidad que se describen aquí.</span>
        </div>
        {/* <div style={{width:'60%',padding:'30px'}}>
            <h1 className='login1-h1'>PRIMERA VEZ EN PMNWINE?</h1>
            <span className='login2-span'>Crear una cuenta es gratis y simple, vas a poder ganar puntos, encontrar descuentos exclusivos y oportunidades únicas.</span>
       
       <div style={{marginTop:'20px'}}>

        <DetailEnvios  width={"100%"}/>
       </div>
                    <Link to="/registro" style={{textDecoration:'none'}}><button style={{marginTop:'80px'}} className='button-login2'>INGRESAR</button></Link>
        </div>*/}
      </div> 
    </div>
  )
}
