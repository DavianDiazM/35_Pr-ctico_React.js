 import React from "react";

 const HolaMundo = () => {
    const hello = "Hola Mundo"
    const isTrue = false

    return(
        <div className="HolaMundo">
            <h1>{hello}</h1>
            <h2>Hola desde un h2</h2>
            <img src="BLE" alt="HOLI"/>
            {isTrue ?<h4>Es Verdadero</h4>: <h5>Es Fasuki</h5>}
            {isTrue && <h4>Es Verdadero &&</h4>}
            
        </div>
    )
 }

 export default HolaMundo