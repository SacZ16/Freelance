import Navbar from "../navbar/Navbar"
import facebook from "./facebook.svg"
import google from "./google.svg"
import { useState } from "react"
import swal from "sweetalert"
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

export default function RegisterPage({setActualizar,actualizar, usuario}) {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    nombre:"",
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
    if(formulario.nombre.length<1){
     return swal("Atención!",
      "Introduce un nombre para continuar",
      "warning")      
    }
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
    fetch("https://free-q3yd.vercel.app/user/register", {
      method: "POST",
      body: JSON.stringify({
        username: formulario.nombre,
        email: formulario.email,
        password: formulario.password,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(r=>{
      if(r.status===200){
      swal("Bienvenido!",
      "Su cuenta fue creada exitosamente!",
      "success")
          setActualizar(!actualizar)
      navigate("/login");
    }
    if(r.status===405){
      swal("Oops!",
      "Ese email ya se encuentra en uso!",
      "warning")
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
      <Navbar usuario={usuario}/>
      <div className="fondo-login-sub-login">
        <div className="login2-contenedor-login"></div>
        <div className="login-contenedor-login">
    <button className="input-login-login" style={{lineHeight:'26px',padding:'10px 0px',textAlign:'start',paddingLeft:'15px',display:'flex',alignItems:'center',gap:'10px'}}><img alt="none" width={35} src={facebook}/>Registrate con Facebook</button>
    <button className="input-login-login" style={{lineHeight:'26px',padding:'10px 0px',textAlign:'start',paddingLeft:'15px',display:'flex',alignItems:'center',gap:'10px'}}><img alt="none" width={35} src={google}/>Registrate con Google</button>
          <section>
          </section>
          {/* <form onSubmit={onSubmit}> */}
    <input onKeyDown={handleKeyDown} type="text" name="nombre" className="input-login-login" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} />
    <input onKeyDown={handleKeyDown} type="email" name="email" className="input-login-login" placeholder="E-mail" value={formulario.email} onChange={handleChange}/>
    <input onKeyDown={handleKeyDown} type="password" name="password" className="input-login-login" placeholder="Creá una contraseña" value={formulario.password} onChange={handleChange}/>
    <button onClick={onSubmit} className="buton-login-login">Creá tu cuenta</button>
          {/* </form> */}
    <span><span className="span-login-lolgin">Ya tienes una cuenta | </span> <Link to="/login" style={{textDecoration:'none'}}><span className="span2-login-lolgin">iniciá sesión</span></Link></span>
        </div>
      </div>
    </div>
  )
}
