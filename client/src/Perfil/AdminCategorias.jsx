import React,{useEffect,useState} from 'react';
import swal from 'sweetalert';
import './Perfil.css'

export default function AdminCategorias(){

    const optionGet = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Barrer",
        },
      };
      const optionDelete = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization: "Barrer",
        },
      };

      const [categorias, setCategorias] = useState([])
      const [showC, setShowC] = useState('lista')
      const [categoria, setCategoria] = useState({
        id: "",
        nombre: ""
      })

      const [newCategory, setNewCategory] = useState({
        nombre: ""
      })

      useEffect(() => {
        fetch("http://localhost:4000/categories", optionGet).then(r => r.json()).then(e=> setCategorias(e))
      }, [])

      const onSumit =()=>{
        let nCategoria= newCategory
        console.log(nCategoria)
        fetch("http://localhost:4000/categories/add", {
        method: "POST",
        body: JSON.stringify(nCategoria),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Origin: "",
          authorization:`Barrer ${localStorage.getItem("Upmn")}`,
        },
      }).then(r => r.status === 200 ? fetch("http://localhost:4000/categories", optionGet).then(r => r.json()).then(e=> {setCategorias(e); setShowC("lista")
      setNewCategory({
        nombre: ""
      })
      swal("Listo",
      "Categoria agregada correctamente",
      "success")
    
    }): swal("Error", "Ha ocurrido un error inesperado", "error"))
    }

    const onPut = () =>{
        let nCategoria = categoria
        fetch("http://localhost:4000/category/update",{
            method: "PUT",
            body: JSON.stringify({id: nCategoria.id, nombre: nCategoria.nombre}),
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Origin: "",
              authorization:`Barrer ${localStorage.getItem("Upmn")}`,
            },
          }).then(r => r.status === 200 ? fetch("http://localhost:4000/categories", optionGet).then(r => r.json()).then(e=> {setCategorias(e); setShowC("lista")
          swal("Listo",
          "Categoria modificada correctamente",
          "success")}):swal("Error", "Ha ocurrido un error inesperado", "error"))
    }

    const handleDelete = (_id) => {
        fetch("http://localhost:4000/category/delete/"+ _id, optionDelete).then(r => r.status === 200 ? fetch("http://localhost:4000/categories", optionGet).then(r => r.json()).then(e=> {setCategorias(e); setShowC("lista")
        swal("Listo",
        "Categoria eliminada correctamente",
        "success")}): swal("Error", "Ha occurido un error inesperado", "error"))
    }

      return (
        <div className='categoria-perfil-admin'>
            <div style={{display:'flex',gap:'10px'}}>
            <button onClick={()=>setShowC("lista")}>Lista de Categorias</button>
            <button onClick={()=>setShowC("agregar")}>Agregar nueva Categoria</button>
            </div>
            <div>
                   { showC === "lista" && <div>
                    {
                        categorias.map(e => {
                            return(
                                <div key={e._id}>
                                    <h3>{e.nombre}</h3>
                                    <div style={{display:'flex',gap:'10px'}}>
                                    <button onClick={() => handleDelete(e._id)}>X</button>
                                    <button onClick={() => {setShowC("modificar"); setCategoria({id: e._id, nombre: e.nombre})}}>Modificar</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    </div>}
                    {showC === "agregar" && 
                    <div style={{display:'flex',gap:'10px',padding:'10px',alignItems:'center'}}>
                        <label>Nombre</label>
                        <input onChange={e => setNewCategory({nombre: e.target.value})} type='text' value={newCategory.nombre}></input>
                        <button onClick={() => onSumit()}>Nueva Categoria</button>
                    </div>}
                    {showC === "modificar" && 
                    <div style={{display:'flex',gap:'10px',padding:'10px',alignItems:'center'}}>
                        <label>Nuevo Nombre</label>
                        <input value={categoria.nombre} onChange={(e) => setCategoria({...categoria, nombre: e.target.value})}></input>
                        <button onClick={() => onPut()}>Guardar Cambios</button>
                    </div>}
            </div>
        </div>
      )
}