import React,{useCallback,useEffect,useState} from 'react'
import Card from '../components/card/Card'


export default function AdminSubirProducto() {
    
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
        categoria:"",
        categorianame:"",
        caracteristicas:""
    })
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
        console.log(imagenes)
        setLoading(false)
      }, []);
  return (
    <div>
        <Card
                  titulo={producto.titulo}
                  precio={producto.precio}
                  valorUnidad={producto.valorunidad}
                  unidades={producto.unidades}
                  categoria={producto.categorianame}
                  imagen={imagenes[0]}
                />
        <input onChange={(e) => handleimage(e)} type={"file"}></input>
               {
                imagenes.map(e=>{return(
                    <img src={e} alt="not found" width={300} height={300}/>
                )})
               }
               <label>Titulo del producto</label>
               <input onChange={e=>setProducto({...producto,titulo:e.target.value})} value={producto.titulo} type='text' name="titulo" ></input>
               <label>Precio</label>
               <input onChange={e=>setProducto({...producto,precio:e.target.value})} value={producto.precio} type='text' name="precio" ></input>
               <label>Unidades</label>
               <input onChange={e=>setProducto({...producto,unidades:e.target.value})} value={producto.unidades} type='text' name="unidades" ></input>
               <label>Valor por Unidad</label>
               <input onChange={e=>setProducto({...producto,valorunidad:e.target.value})} value={producto.valorunidad} type='text' name="valorunidad" ></input>
               <label>Stock</label>
               <input onChange={e=>setProducto({...producto,stock:e.target.value})} value={producto.stock} type='text' name="stock" ></input>
               <label>descripcion</label>
               <input onChange={e=>setProducto({...producto,descripcion:e.target.value})} value={producto.descripcion} type='text' name="descripcion" ></input>
               
               <label>Categoria</label>
               
                <select onChange={(e)=>console.log(e.target.value)}>
                <option value="0" selected="selected"></option>
                    {categories.map(e=>{return(
                        <option key={e._id} name={e.nombre} value={e._id}>{e.nombre}</option>
                    )})}
                </select>
               
               
               <div>
               <label>Caracteristicas</label>
               <label>Tipo de vino</label>
               <input onChange={e=>setProductocaracteristicas({...productocaracteristicas,tipo:e.target.value})} value={productocaracteristicas.tipo}  type='text' name="tipo" ></input>
               <label>Origen</label>
               <input type='text' name="origen" ></input>
               <label>Provincia</label>
               <input type='text' name="provincia" ></input>
               <label>Localidad</label>
               <input type='text' name="localidad" ></input>
               <label>Altura</label>
               <input type='text' name="altura" ></input>
               <label>Guarda</label>
               <input type='text' name="guarda" ></input>
               <label>Uva</label>
               <input type='text' name="uva" ></input>
               <label>Cosecha</label>
               <input type='text' name="cosecha" ></input>
               </div>
               <button onClick={()=>console.log(producto)}>producto</button>
    </div>
  )
}
