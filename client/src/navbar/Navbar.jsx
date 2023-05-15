import "./Navbar.css";
import logo from "../assets/logo.svg";
import profile from "./profile.svg";
import car from "./car.svg";
import help from "./help.svg";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function Navbar() {
  const [categorias, setCategorias] = useState([])

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
    fetch("http://localhost:8080/categories",optionGet).then(r=>r.json()).then(c=>setCategorias(c))
  }, [])
  
  return (
    <div>
      <main className="container-navbar">
        <Link to="/">
          <img src={logo} alt="pmn" />
        </Link>
        <section className="section-navbar1">
          {categorias?.map(e=>{
            return (
              <Link to={`/${e.nombre.toLowerCase()}`} key={e._id}>
                <p className="h4-navbar">{e.nombre.toUpperCase()}</p>
              </Link>
            )
          })}
          {/* <p className="h4-navbar">GIFT CARD</p> */}
        </section>
        <section className="section-navbar">
          {
            localStorage.getItem("Upmn")?
            <>
            <Link to="/perfil" style={{textDecoration:'none'}}> <img className="img-svg-navbar" src={profile} alt="profile" />
          </Link>
            <img src={car} alt="car" />
            </>            
            :
            <>
            <Link to="/login" style={{textDecoration:'none'}}>Iniciar</Link>
            <Link to="/registro" style={{textDecoration:'none'}}>Registro</Link>
            </>
          }
          {/* <img src={help} alt="help"/> */}
        </section>
      </main>
      <section className="section-navbar2">
      {categorias?.map(e=>{
            return (
              <Link to={`/${e.nombre.toLowerCase()}`} key={e._id}>
                <p className="h4-navbar">{e.nombre.toUpperCase()}</p>
              </Link>
            )
          })}
      </section>
    </div>
  );
}
