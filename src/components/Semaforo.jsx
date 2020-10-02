import React, {useState} from 'react';

const Semaforo = () => {
    const [colorname, setColor]= useState("negro")
    return (
        <>
        <div className="cable"></div>
        <div className="caja">
             <div name="rojo" className= {`rojo ${colorname=== "rojo" ? "seleccionado" : ""}`} onClick={()=>{return setColor("rojo")}}> </div>
             <div name="amarillo" className={`amarillo ${colorname=== "amarillo" ? "seleccionado" : ""}`} onClick={()=>{return setColor("amarillo")}}></div>
             <div name="verde" className={`verde ${colorname=== "verde" ? "seleccionado" : ""}`} onClick={()=>{return setColor("verde")}}></div>   
        </div>
        </>

    )

}

export default Semaforo