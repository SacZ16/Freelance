import React,{useCallback,useEffect,useState} from 'react'
import swal from "sweetalert"
import Card from '../components/card/Card'
import { useNavigate } from 'react-router-dom'
import './Perfil.css'

export default function AdminSubirProducto() {

  const navigate = useNavigate()
    
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
        fetch("http://localhost:8080/categories", optionGet).then(r => r.json()).then(e=> setCategories(e))
    }, [])
    const [productocaracteristicas, setProductocaracteristicas] = useState({
            tipo:"",
            origen:"",
            provincia:"",
            localidad:"",
            altura:"",
            guarda:"",
            uva:"",
            cosecha:""
    })
    const [producto, setProducto] = useState({
        titulo:"",
        precio:0,
        valorunidad:0,
        unidades:0,
        imagenes:"",
        categoria:"",
        categorianame:"-",
        caracteristicas:""
    })
    const onSumit =()=>{
      let listoproducto= producto
      listoproducto.caracteristicas=productocaracteristicas
      listoproducto.imagenes=imagenes
      if(listoproducto.titulo.length < 1 || 
        listoproducto.precio < 1 ||
        listoproducto.valorunidad < 1 ||
        listoproducto.unidades < 1 ||
        listoproducto.imagenes.length < 1 ||
        listoproducto.categoria.length < 1 ||
        listoproducto.caracteristicas.tipo.length < 1 ||
        listoproducto.caracteristicas.origen.length < 1 ||
        listoproducto.caracteristicas.provincia.length < 1 ||
        listoproducto.caracteristicas.localidad.length < 1 ||
        listoproducto.caracteristicas.altura.length < 1 ||
        listoproducto.caracteristicas.guarda.length < 1 ||
        listoproducto.caracteristicas.uva.length < 1 ||
        listoproducto.caracteristicas.cosecha.length < 1
        ) return swal("Advertencia",
        "Por favor completa todos los campos",
        "warning")
      fetch("http://localhost:8080/product/add", {
      method: "POST",
      body: JSON.stringify(listoproducto),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: "",
        authorization:`Barrer ${localStorage.getItem("Upmn")}`,
      },
    }).then(r => { if (r.status === 200 ){
      swal("Listo","Producto agregado correctamente", "success")
       setProducto({
      titulo:"",
        precio:0,
        valorunidad:0,
        unidades:0,
        imagenes:"",
        categoria:"",
        categorianame:"-",
        caracteristicas:""
    })
    setProductocaracteristicas({
      tipo:"",
      origen:"",
      provincia:"",
      localidad:"",
      altura:"",
      guarda:"",
      uva:"",
      cosecha:""
    })} else  swal("Error", "Ha occurrido un error inesperado", "error")})
    }
    const [imagenes, setImagenes] = useState([])
    const [loading,setLoading] = useState(true)
    const [categories,setCategories] = useState([])
    let ima=[]
    const handleimage = useCallback(async (e) => {        
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
        ima.push(file.secure_url)
        setImagenes(ima)
        console.log({imagenes})
        setLoading(false)
      }, []);
  return (
    <div style={{display:'flex'}}>
      <div>
    <div style={{width:'max-content',height:'max-content'}}>
        <div style={{background:'transparent',position:'absolute',zIndex:'10000000000',width:'326px',height:'472px'}}></div>
        <Card
                  titulo={producto.titulo}
                  precio={producto.precio}
                  valorUnidad={producto.valorunidad}
                  unidades={producto.unidades}
                  categoria={producto.categorianame}
                  imagen={imagenes[0]}
                  />
                  </div>
               {
                 imagenes.map(e=>{return(
                   <img src={e} alt="not found" width={225} height={225}/>
                   )})
                  }
                  </div>
                <div style={{padding:'20px'}}>
                    <div className='admin-subir-producto'>
                  <section style={{marginRight:'5px',padding:'0px 10px',height:'75px',width:'300px',overflow:'hidden'}}>
               <label for="img">Sube una imagen a la vez</label>
        <input id="img" onChange={(e) => handleimage(e)} type={"file"}></input>
                  </section>
                  <section>
               <label>Titulo del producto</label>
               <input onChange={e=>setProducto({...producto,titulo:e.target.value})} value={producto.titulo} type='text' name="titulo" ></input>
                  </section>
                  <section>
               <label>Precio caja</label>
               <input onChange={e=>setProducto({...producto,precio:e.target.value})} value={producto.precio} type='text' name="precio" ></input>
               </section>
               <section>
               <label>Unidades por caja</label>
               <input onChange={e=>setProducto({...producto,unidades:e.target.value})} value={producto.unidades} type='text' name="unidades" ></input>
               </section>
               <section>
               <label>Valor por Unidad</label>
               <input onChange={e=>setProducto({...producto,valorunidad:e.target.value})} value={producto.valorunidad} type='text' name="valorunidad" ></input>
               </section>
               <section>
               <label>Stock</label>
               <input onChange={e=>setProducto({...producto,stock:e.target.value})} value={producto.stock} type='text' name="stock" ></input>
               </section>
               <section>
               <label>descripcion</label>
               <input onChange={e=>setProducto({...producto,descripcion:e.target.value})} value={producto.descripcion} type='text' name="descripcion" ></input>
               </section>
               <section>
               <label>categoria</label>
                <select onChange={(e)=>setProducto({...producto,categorianame:JSON.parse(e.target.value).name,categoria:JSON.parse(e.target.value).id})}>
                <option  selected="selected" defaultValue={""} disabled="true">categorias</option>
                    {categories.map(e=>{return(
                        <option key={e._id} name={e.nombre} value={'{"id":'+JSON.stringify(e._id)+',"name":'+JSON.stringify(e.nombre)+'}'} >{e.nombre}</option>
                    )})}
                </select>
               
                </section>
               </div>
                <hr></hr>
               <div>  
               <label className='letra-perfil' style={{color:'black'}}>Caracteristicas</label>
               <div className='admin-subir-producto'>

               <section>
               <label>Tipo de producto</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,tipo:e.target.value})} value={productocaracteristicas.tipo}  type='text' name="tipo" ></input>
               </section>
               <section>
               <label>Origen</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,origen:e.target.value})} value={productocaracteristicas.origen}  type='text' name="origen" ></input>
               </section>
               <section>
               <label>Provincia</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,provincia:e.target.value})} value={productocaracteristicas.provincia}  type='text' name="provincia" ></input>
               </section>
               <section>
               <label>Localidad</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,localidad:e.target.value})} value={productocaracteristicas.localidad}  type='text' name="localidad" ></input>
               </section>
               <section>
               <label>Altura</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,altura:e.target.value})} value={productocaracteristicas.altura}  type='text' name="altura" ></input>
               </section>
               <section>
               <label>Guarda</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,guarda:e.target.value})} value={productocaracteristicas.guarda}  type='text' name="guarda" ></input>
               </section>
               <section>
               <label>Uva</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,uva:e.target.value})} value={productocaracteristicas.uva}  type='text' name="uva" ></input>
               </section>
               <section>
               <label>Cosecha</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,cosecha:e.target.value})} value={productocaracteristicas.cosecha}   type='text' name="cosecha" ></input>
               </section>
               </div>
               </div>
               <button  onClick={()=>onSumit()} className='letra-perfil'>Publicar producto</button>
               </div>
               
    </div>
  )
}
