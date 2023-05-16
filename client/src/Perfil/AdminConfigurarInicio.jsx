import React,{useEffect,useState,useCallback} from 'react'
import Carousel from '../components/carousel/Carousel';
import Card from '../components/card/Card';
import { Loading } from '../components/loading/Loading';

export default function AdminConfigurarInicio() {
  const [opcion, setOpcion] = useState("")
  const [categories, setCategories] = useState("")
  const [home, setHome] = useState("");
  const [elegidos, setElegidos] = useState("");
const [loading, setLoading] = useState(false)

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")
  const [sliceModificado, setSliceModificado] = useState("")
  const [postersModificado, setPostersModificado] = useState("")
  const [destacadoModificado, setDestacadoModificado] = useState({
    producto1:{},
    producto2:{},
    producto3:{},
    producto4:{}
  })
  const [allProducts, setAllProducts] = useState('')

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
    if (categoriaSeleccionada?.nombre)
      fetch(
        "http://localhost:8080/products/filter/" + categoriaSeleccionada.nombre,
        optionGet
      )
        .then(async(r) =>{
          if(r.status===200){
            const response = await r.json()
            console.log(":)",response)
             setElegidos(response)
          }
        })
    console.log("ayuda",categoriaSeleccionada)
  }, [categoriaSeleccionada]);
  useEffect(() => {

    fetch("http://localhost:8080/products", optionGet).then(r => r.json()).then(r => {setAllProducts(r)})
    fetch("http://localhost:8080/categories", optionGet).then(r => r.json()).then(e=>{setCategories(e)})
    fetch("http://localhost:8080/home", optionGet).then(r => r.json()).then(e=> {setHome(e[0]);console.log({e});setDestacadoModificado({producto1:e[0].destacados[0],producto2:e[0].destacados[1],producto3:e[0].destacados[2],producto4:e[0].destacados[3]});setPostersModificado(e[0].posters);setSliceModificado(e[0].slice);setCategoriaSeleccionada({id:e[0].elegidos._id,nombre:e[0].elegidos.nombre})})
  }, [])
  const handleimage = async (e,parametro,lugar) => {     
    setLoading(true)     
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "vayssr63");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dva6dmzv3/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url)
    if(parametro ==="slice"){
      let sliceantes=sliceModificado
     if(lugar===0) {sliceantes[0]=file.secure_url;setSliceModificado(sliceantes)}
     if(lugar===1) {sliceantes[1]=file.secure_url;setSliceModificado(sliceantes)}
     if(lugar===2) {sliceantes[2]=file.secure_url;setSliceModificado(sliceantes)}
    }
    if(parametro ==="posters"){
      let postersantes=postersModificado
     if(lugar===0) {postersantes[0]=file.secure_url;setPostersModificado(postersantes)}
     if(lugar===1) {postersantes[1]=file.secure_url;setPostersModificado(postersantes)}
    }
    setLoading(false)   
  };

  const guardardestacado=()=>{
    let destacadosmodificadolisto= [destacadoModificado.producto1._id,destacadoModificado.producto2._id,destacadoModificado.producto3._id,destacadoModificado.producto4._id]
    console.log("se manda esto",JSON.stringify({id:"64629306d7cc9a8b5880ab60",destacados:destacadosmodificadolisto}))
    fetch("http://localhost:8080/home/destacados", {
      method: "PUT",
      body: JSON.stringify({id:"64629306d7cc9a8b5880ab60",destacados:destacadosmodificadolisto}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(e=> e.status === 200 ? swal("Exito", "Destacados Actualizados", "success") : swal("Error", "Ha occurrido un problema inesperado", "error"))
  }

  const guardarelegido=()=>{
    console.log(categoriaSeleccionada)
    fetch("http://localhost:8080/home/elegidos", {
      method: "PUT",
      body: JSON.stringify({id:"64629306d7cc9a8b5880ab60",elegidos:categoriaSeleccionada.categoria}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(e=>e.status === 200 ? swal("Exito", "Elegidos Actualizados", "success") : swal("Error", "Ha occurrido un problema inesperado", "error"))
  }
  const guardarSlice=()=>{
    console.log(sliceModificado)
    fetch("http://localhost:8080/home/slice", {
      method: "PUT",
      body: JSON.stringify({id:"64629306d7cc9a8b5880ab60",slice:sliceModificado}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(e=>e.status === 200 ? swal("Exito", "Slices Actualizados", "success") : swal("Error", "Ha occurrido un problema inesperado", "error"))
  }
  const guardarPosters=()=>{
    console.log(postersModificado)
    fetch("http://localhost:8080/home/posters", {
      method: "PUT",
      body: JSON.stringify({id:"64629306d7cc9a8b5880ab60",posters:postersModificado}),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization: "Barrer",
      },
    }).then(e=>e.status === 200 ? swal("Exito", "Posters Actualizados", "success") : swal("Error", "Ha occurrido un problema inesperado", "error"))
  }
  return (
    <div>
        <div style={{display:'flex',gap:'20px'}}>
            <button onClick={()=>setOpcion("slice")}>Slice</button>
            <button onClick={()=>setOpcion("posters")}>Posters</button>
            <button onClick={()=>setOpcion("elegido")}>Elegido</button>
            <button onClick={()=>setOpcion("destacados")}>Destacados</button>
        </div>
        {
          opcion === "slice"?
          <div>
            <div style={{display:'flex',gap:'20px',margin:'20px',flexWrap:'wrap'}}>

            <section style={{display:'flex'}}>
            <label for="imagen1" style={{width:'max-content',background:'#1a1a1a',color:'white',padding:'10px',borderRadius:'10px',fontFamily:'Poppins',cursor:'pointer'}}>Cambiar la primera imagen</label>
            <input id="imagen1" style={{opacity:'0',position:'absolute',zIndex:'-11',left:'-10000px'}} onChange={(e) => handleimage(e,"slice",0)} type={"file"}></input>
            </section>
            <section style={{display:'flex'}}>
            <label for="imagen2" style={{background:'#1a1a1a',color:'white',padding:'10px',borderRadius:'10px',fontFamily:'Poppins',cursor:'pointer'}}>Cambiar la segunda imagen</label>
            <input id="imagen2" style={{opacity:'0',position:'absolute',zIndex:'-11',left:'-10000px'}} onChange={(e) => handleimage(e,"slice",1)} type={"file"}></input>
            </section>
            <section style={{display:'flex'}}>
            <label for="imagen3" style={{background:'#1a1a1a',color:'white',padding:'10px',borderRadius:'10px',fontFamily:'Poppins',cursor:'pointer'}}>Cambiar la tercera imagen</label>
            <input id="imagen3" style={{opacity:'0',position:'absolute',zIndex:'-11',left:'-10000px'}} onChange={(e) => handleimage(e,"slice",2)} type={"file"}></input>
            </section>
            <button onClick={()=>guardarSlice()}>Guardar</button>
            </div>
            {sliceModificado&&!loading?<div><Carousel width={"50vw"} height={"50vh"} fix={false} array={sliceModificado}/></div>:<Loading></Loading>}
          </div>
          :opcion==="posters"?
          
          <div>
            {home.posters&&
        <div>
          <div style={{display:'flex',gap:'20px',margin:'20px',flexWrap:'wrap'}}>

<section style={{display:'flex'}}>
<label for="imagen11" style={{width:'max-content',background:'#1a1a1a',color:'white',padding:'10px',borderRadius:'10px',fontFamily:'Poppins',cursor:'pointer'}}>imagen1</label>
<input id="imagen11" style={{opacity:'0',position:'absolute',zIndex:'-11',left:'-10000px'}} onChange={(e) => handleimage(e,"posters",0)} type={"file"}></input>
</section>
<section style={{display:'flex'}}>
<label for="imagen21" style={{background:'#1a1a1a',color:'white',padding:'10px',borderRadius:'10px',fontFamily:'Poppins',cursor:'pointer'}}>imagen2</label>
<input id="imagen21" style={{opacity:'0',position:'absolute',zIndex:'-11',left:'-10000px'}} onChange={(e) => handleimage(e,"posters",1)} type={"file"}></input>
</section>
<button onClick={()=>guardarPosters()}>Guardar</button>
</div>
          <img src={postersModificado[0]} width={300} height={150} alt="vinos"/>
        <img src={postersModificado[1]} width={300} height={150}  alt="vinos"/>
        </div>
        }
          </div>
          :opcion ==="elegido"?
          <div>
            <section>
               <label>categoria</label>
                <select onChange={(e)=>setCategoriaSeleccionada({nombre:JSON.parse(e.target.value).name,categoria:JSON.parse(e.target.value).id})}>
                <option  selected="selected" defaultValue={""} disabled="true">categorias</option>
                    {categories &&categories.map(e=>{return(
                        <option key={e._id} name={e.nombre}  value={'{"id":'+JSON.stringify(e._id)+',"name":'+JSON.stringify(e.nombre)+'}'} >{e.nombre}</option>
                    )})}
                </select>
               
                </section>
                <button onClick={()=>guardarelegido()}>Guardar</button>
            <div>
            {elegidos&& elegidos.reverse().slice(0,4).map((producto, index) => {
            return <Card key={producto._id}
            titulo={producto.titulo}
            precio={producto.precio}
            valorUnidad={producto.valorunidad}
            unidades={producto.unidades}
            categoria={producto.categoria.nombre}
            imagen={producto.imagenes[0]}/>;
          })}
            </div>
          </div>
          :opcion ==="destacados"?
          <div>
            <div>
            <section>
               <label>Destacado1:</label>
                <select onChange={(e)=>setDestacadoModificado({...destacadoModificado,producto1:JSON.parse(e.target.value).producto})}>
                <option  selected="selected" defaultValue={""} disabled="true">allProducts</option>
                    {allProducts &&allProducts.map(e=>{return(
                        <option key={e._id} name={e.titulo}  value={'{"producto":'+JSON.stringify(e)+'}'} >{e.titulo}</option>
                    )})}
                </select>
               
                </section>
            <section>
               <label>Destacado2:</label>
                <select onChange={(e)=>setDestacadoModificado({...destacadoModificado,producto2:JSON.parse(e.target.value).producto})}>
                <option  selected="selected" defaultValue={""} disabled="true">allProducts</option>
                    {allProducts &&allProducts.map(e=>{return(
                        <option key={e._id} name={e.titulo}  value={'{"producto":'+JSON.stringify(e)+'}'} >{e.titulo}</option>
                    )})}
                </select>
               
                </section>
            <section>
               <label>Destacado3:</label>
                <select onChange={(e)=>setDestacadoModificado({...destacadoModificado,producto3:JSON.parse(e.target.value).producto})}>
                <option  selected="selected" defaultValue={""} disabled="true">allProducts</option>
                    {allProducts &&allProducts.map(e=>{return(
                        <option key={e._id} name={e.titulo}  value={'{"producto":'+JSON.stringify(e)+'}'} >{e.titulo}</option>
                    )})}
                </select>
               
                </section>
            <section>
               <label>Destacado4:</label>
                <select onChange={(e)=>setDestacadoModificado({...destacadoModificado,producto4:JSON.parse(e.target.value).producto})}>
                <option  selected="selected" defaultValue={""} disabled="true">allProducts</option>
                    {allProducts &&allProducts.map(e=>{return(
                        <option key={e._id} name={e.titulo}  value={'{"producto":'+JSON.stringify(e)+'}'} >{e.titulo}</option>
                    )})}
                </select>
               
                </section>
                <button onClick={()=>guardardestacado()}>guardar</button>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',gap:'10px'}}>

           

                {destacadoModificado&&<Card key={destacadoModificado.producto1._id}
                titulo={destacadoModificado.producto1.titulo}
                precio={destacadoModificado.producto1.precio}
                valorUnidad={destacadoModificado.producto1.valorunidad}
                unidades={destacadoModificado.producto1.unidades}
                categoria={destacadoModificado.producto1.categoria.nombre}
                imagen={destacadoModificado.producto1.imagenes[0]}/>}
                {destacadoModificado&&<Card key={destacadoModificado.producto2._id}
                titulo={destacadoModificado.producto2.titulo}
                precio={destacadoModificado.producto2.precio}
                valorUnidad={destacadoModificado.producto2.valorunidad}
                unidades={destacadoModificado.producto2.unidades}
                categoria={destacadoModificado.producto2.categoria.nombre}
                imagen={destacadoModificado.producto2.imagenes[0]}/>}
                {destacadoModificado&&<Card key={destacadoModificado.producto3._id}
                titulo={destacadoModificado.producto3.titulo}
                precio={destacadoModificado.producto3.precio}
                valorUnidad={destacadoModificado.producto3.valorunidad}
                unidades={destacadoModificado.producto3.unidades}
                categoria={destacadoModificado.producto3.categoria.nombre}
                imagen={destacadoModificado.producto3.imagenes[0]}/>}
                {destacadoModificado&&<Card key={destacadoModificado.producto4._id}
                titulo={destacadoModificado.producto4.titulo}
                precio={destacadoModificado.producto4.precio}
                valorUnidad={destacadoModificado.producto4.valorunidad}
                unidades={destacadoModificado.producto4.unidades}
                categoria={destacadoModificado.producto4.categoria.nombre}
                imagen={destacadoModificado.producto4.imagenes[0]}/>}
                </div>
            </div>
            <button onClick={()=>console.log(allProducts)}>hola</button>
          </div>
          :
          <div></div>
        }
    </div>
  )
}





  