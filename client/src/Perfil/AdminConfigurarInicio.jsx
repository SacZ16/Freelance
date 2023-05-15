import React,{useEffect,useState} from 'react'

export default function AdminConfigurarInicio() {
  const [opcion, setOpcion] = useState("")
  return (
    <div>
        <div>
            <button>Slice</button>
            <button>Posters</button>
            <button>Elejido</button>
            <button>Destacados</button>
        </div>
    </div>
  )
}
