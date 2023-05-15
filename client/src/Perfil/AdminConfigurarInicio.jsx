import React,{useEffect,useState} from 'react'

export default function AdminConfigurarInicio() {
  const [opcion, setOpcion] = useState("")

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
    fetch("http://localhost:8080/home", optionGet).then(r => r.json()).then(e=> console.log(e))
  }, [])

  return (
    <div>
        <div>
            <button onClick={()=>setOpcion("slice")}>Slice</button>
            <button onClick={()=>setOpcion("posters")}>Posters</button>
            <button onClick={()=>setOpcion("elejido")}>Elejido</button>
            <button onClick={()=>setOpcion("eestacados")}>Destacados</button>
        </div>
        {
          opcion === "slice"?
          <div></div>
          :opcion==="posters"?
          <div></div>
          :opcion ==="elejido"?
          <div></div>
          :opcion ==="destacados"?
          <div></div>
          :
          <div></div>
        }
    </div>
  )
}