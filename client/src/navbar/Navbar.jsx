import "./Navbar.css"
import logo from "../assets/logo.svg"
import profile from "./profile.svg"
import car from "./car.svg"
import help from "./help.svg"
export default function Navbar() {
  return (
    <main className="container-navbar">
        <img src={logo} alt="pmn"/>
        <section className="section-navbar">
            <p className="h4-navbar">VINOS</p>
            <p className="h4-navbar">ESPUMANTES</p>
            <p className="h4-navbar">DESTILADOS</p>
            <p className="h4-navbar">ESPECIALES</p>
            <p className="h4-navbar">GIFT CARD</p>
        </section>
        <section className="section-navbar">
            <img src={profile} alt="profile"/>
            <img src={car} alt="car"/>
            <img src={help} alt="help"/>
        </section>
    </main>
  )
}
