
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Home from "./home/Home";
import Detail from "./detail/Detail";
import LoginPage from "./Login/LoginPage";
import Compra from "./compra/Compra";
import Filtro from "./filtro/Filtro";
import RegisterPage from "./Login/RegisterPage";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:filtro" element={<Filtro/>}/>
      <Route path="/registro" element={<RegisterPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/detalle/:id" element={<Detail/>}/>
      <Route path="/cpm" element={<Compra/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
