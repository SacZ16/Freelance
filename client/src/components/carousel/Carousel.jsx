import { useState } from "react"
import mock from "./mock.svg"
import leftArrow from "./leftArrow.svg"
import rightArrow from "./rightArrow.svg"
import "./Carousel.css"

export default function Carousel({width,height,fix,array}) {
    const fondos =  ["red","blue","yellow"]
    const [indexCarousel, setindexCarousel] = useState(0)

  return (
    <main style={{width:width,height:height,margin:'auto'}}>
        <div className="container-carousel">
            <button className="buttonRight-carousel" onClick={()=>{indexCarousel===0?setindexCarousel(-array.length+1):setindexCarousel(indexCarousel+1)}}><img src={leftArrow} alt="leftArrow"/></button>
            {
            array.length>0 && typeof array !== "function"&&
            array.map((image,i)=>{
                return(
                    <div className="container2-carousel" style={{width:width,height:height,left:`${indexCarousel+i}00%`}}>
                        <img style={{objectFit:`${fix?'cover':'contain'}`,width:width,height:height}} src={image.split(".",3).join(".").replace("upload/","upload/q_55/")+".avif"} alt="image"/>
                    </div>
                )
            })
            // :
            // fondos.map((image,i)=>{
            //     return(
            //         <div className="container2-carousel" style={{width:width,height:height,left:`${indexCarousel+i}00%`}}>
            //             <img style={{objectFit:`${fix?'cover':'contain'}`,width:width,height:height}} src={mock} alt="mock"/>
            //         </div>
            //     )
            // })
        }
        <button className="buttonLeft-carousel" onClick={()=>{indexCarousel<(-(array.length-2))?setindexCarousel(0):setindexCarousel(indexCarousel-1)}}><img src={rightArrow} alt="rightArrow"/></button>
        </div>
    </main>
  )
}
