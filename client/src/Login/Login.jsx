import Navbar from "../navbar/Navbar"
import facebook from "./facebook.svg"
import google from "./google.svg"
import "./Login.css"

export default function Login() {
  return (
    <div>
      <div className="ventaporcaja-login">
       <p className="ventaporcaja-letra-login">VENTA POR CAJA EXCLUSIVAMENTE</p>
        </div>
      <Navbar />
      <div className="fondo-login-sub-login">
        <div className="login2-contenedor-login"></div>
        <div className="login-contenedor-login">
    <button className="input-login-login" style={{lineHeight:'26px',padding:'10px 0px',textAlign:'start',paddingLeft:'15px',display:'flex',alignItems:'center',gap:'10px'}}><img alt="none" width={35} src={facebook}/>Registrate con Facebook</button>
    <button className="input-login-login" style={{lineHeight:'26px',padding:'10px 0px',textAlign:'start',paddingLeft:'15px',display:'flex',alignItems:'center',gap:'10px'}}><img alt="none" width={35} src={google}/>Registrate con Google</button>
          <section>
          </section>
    <input type="email" className="input-login-login" placeholder="E-mail"/>
    <input type="password" className="input-login-login" placeholder="creá una contraseña"/>
    <input className="input-login-login" placeholder="volve a escribir la contraseña"/>
    <button className="buton-login-login">creá tu cuenta</button>
    <span><span className="span-login-lolgin">Ya tienes una cuenta | </span><span className="span2-login-lolgin">iniciá seción</span></span>
        </div>
      </div>
    </div>
  )
}
