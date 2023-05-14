import "./Navbar.css";
import logo from "../assets/logo.svg";
import profile from "./profile.svg";
import car from "./car.svg";
import help from "./help.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <main className="container-navbar">
        <Link to="/">
          <img src={logo} alt="pmn" />
        </Link>
        <section className="section-navbar1">
          <Link to="/vinos">
            <p className="h4-navbar">VINOS</p>
          </Link>
          <Link to="/espumantes">
            <p className="h4-navbar">ESPUMANTES</p>
          </Link>
          <Link to="/destilados">
            <p className="h4-navbar">DESTILADOS</p>
          </Link>
          <Link to="/especiales">
            <p className="h4-navbar">ESPECIALES</p>
          </Link>
          {/* <p className="h4-navbar">GIFT CARD</p> */}
        </section>
        <section className="section-navbar">
          <img src={profile} alt="profile" />
          <img src={car} alt="car" />
          {/* <img src={help} alt="help"/> */}
        </section>
      </main>
      <section className="section-navbar2">
        <Link to="/vinos">
          <p className="h4-navbar">VINOS</p>
        </Link>
        <Link to="/espumantes">
          <p className="h4-navbar">ESPUMANTES</p>
        </Link>
        <Link to="/destilados">
          <p className="h4-navbar">DESTILADOS</p>
        </Link>
        <Link to="/especiales">
          <p className="h4-navbar">ESPECIALES</p>
        </Link>
      </section>
    </div>
  );
}
