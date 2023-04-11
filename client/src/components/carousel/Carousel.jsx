import { useState } from "react"
import mock from "./mock.svg"
import leftArrow from "./leftArrow.svg"
import rightArrow from "./rightArrow.svg"
import "./Carousel.css"

export default function Carousel({width,height}) {
    const fondos =["red","blue","yellow"]
    const [indexCarousel, setindexCarousel] = useState(0)

  return (
    <main style={{width:width,height:height,margin:'auto'}}>
        <div className="container-carousel">
            <button className="buttonRight-carousel" onClick={()=>{indexCarousel===0?setindexCarousel(-fondos.length+1):setindexCarousel(indexCarousel+1)}}><img src={leftArrow} alt="leftArrow"/></button>
            {fondos.map((image,i)=>{
                return(
                    <div className="container2-carousel" style={{width:width,height:height,left:`${indexCarousel+i}00%`}}>
                        <img style={{objectFit:'cover',width:width,height:height}} src={mock} alt="mock"/>
                    </div>
                )
            })}
        <button className="buttonLeft-carousel" onClick={()=>{indexCarousel<(-fondos.length+2)?setindexCarousel(0):setindexCarousel(indexCarousel-1)}}><img src={rightArrow} alt="rightArrow"/></button>
        </div>
    </main>
  )
}
