
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import Home from "./home/Home";
import Login from "./Login/Login";
import Detail from "./detail/Detail";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/detalle/:id" element={<Detail/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
