
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Home from "./home/Home";
import Login from "./Login/Login";
import Detail from "./detail/Detail";
import Login2 from "./Login/Login2";
import Compra from "./compra/Compra";
import Filtro from "./filtro/Filtro";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:filtro" element={<Filtro/>}/>
      <Route path="/registro" element={<Login/>}/>
      <Route path="/login" element={<Login2/>}/>
      <Route path="/detalle/:id" element={<Detail/>}/>
      <Route path="/cpm" element={<Compra/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
