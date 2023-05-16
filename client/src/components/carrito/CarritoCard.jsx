import React from 'react'
import close from './close.svg'

export default function CarritoCard({setEstadoCarrito}) {
    // document.body.classList.add('no-scroll')
  return (
    <div style={{width:'100vw',height:'100vh',display:'flex',justifyContent:'center',position:'fixed',zIndex:'123123123',top:'0',alignItems:'center',background:'#00000096'}}>
    <div style={{borderRadius:'10px',position:'absolute',border:'4px solid transparent',zIndex:'10210300',maxWidth:'360px',width:'100vw',height:'90vh',background:'white',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div style={{display:'flex',justifyContent:'end',paddingBottom:'10px'}}>
            <img   
            onClick={()=>{setEstadoCarrito(false);document.body.classList.remove('no-scroll')}}       
            style={{ position: "relative", zIndex: 100,cursor:'pointer' }}
            src={close}
            alt="close"
          /></div>
        <div style={{padding:'10px',overflow:'auto',height:'100%',width:'calc(100% - 20px)',overflowX:'hidden',display:'flex',gap:'15px',flexDirection:'column',justifyContent:'start'}}>
            {["1",2,3,4,5,6,].map(e=>{return(
                <div style={{padding:'5px',position:'relative',display:'flex',gap:'5px',alignItems:'center',border:'1px solid black',borderRadius:'10px'}}>
                    <img width={50} height={70}></img>
                    <img     
            style={{ position: "absolute", zIndex: 100,cursor:'pointer',top:'5px',right:'5px' }}
            src={close}
            alt="close"
          />
                    <div style={{display:'flex',flexDirection:'column'}}>
                        <span style={{width:'34',height:'34px'}}></span>
                        <span>{("Titulasdasdasdasdasdasdasdasdasdasdasdasdasdasdo").slice(0,25)}{"..."}</span>
                        <span>3453354</span>
                    </div>
                </div>
            )})}
        </div>
        <div style={{display:'flex',justifyContent:'center'}}><button>Comprar</button></div>
    </div>
    </div>
  )
}
