import { useState } from "react"
import "./Carousel.css"

export default function Carousel({width,height}) {
    const fondos =["red","blue","yellow"]
    const [indexCarousel, setindexCarousel] = useState(0)

  return (
    <main style={{width:width,height:height,margin:'auto'}}>
        <div className="container-carousel">
            <button className="buttonRight-carousel" onClick={()=>{indexCarousel===0?setindexCarousel(-fondos.length+1):setindexCarousel(indexCarousel+1)}}>+</button>
            {fondos.map((image,i)=>{
                return(
                    <div className="container2-carousel" style={{background:image,width:width,height:height,left:`${indexCarousel+i}00%`}}></div>
                )
            })}
        <button className="buttonLeft-carousel" onClick={()=>{indexCarousel<(-fondos.length+2)?setindexCarousel(0):setindexCarousel(indexCarousel-1)}}>-</button>
        </div>
    </main>
  )
}
