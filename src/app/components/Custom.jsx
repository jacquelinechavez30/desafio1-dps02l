import React from 'react'
//archivo json 
import {empresas} from '../json-empresas-valiosas'
import {fraudes_cripto} from '../json-criptos-fraudes'
import {crisis_economicas} from '../crisis-recientes'


const Custom = () => {
  
  return (
    <div >
      <div className="tituloprincipal"><h1>{empresas.descripcion}</h1></div>
      <div className="empresas-container">
          {empresas.map((empresa) => (
            <div key={empresa.titulo} className="tarjeta">
              <div className="titulosecundario"><h1>{empresa.titulo}</h1></div>
              <h2><p><b>Descripcion:</b></p></h2>
              <div className="caja1">
                <p><b>{empresa.descripcion}</b></p>
                <img src={empresa.imagen} alt={empresa.titulo} /></div>
              <h3>  <p>Caracteristicas:</p></h3>
              <p> <b>{empresa.caracteristicas}</b></p>
              <hr />
            </div>
          ))}
        </div>
      </div>
  )
  /* iterando json 2 de fraudes*/
 /* return(
    <div>
      <div className="tituloprincipal"><h1>Fraudes</h1></div>
      <div className='empresas-container'>
          {fraudes_cripto.map((fraude) => (
            <div key={fraude.titulo} className="tarjeta">
              <div className="titulosecundario"><h1>{fraude.titulo}</h1></div>
              
              <h2><p><b>Descripcion:</b></p></h2>
              <div className="caja1">
                <p><b>{fraude.descripcion}</b></p>
                <img src={fraude.imagen_de_referencia} alt={fraude.titulo} />
                </div>
              <h3>  <p>Caracteristicas: </p></h3>
              <div> {fraude.caracteristicas.map((caracteristica)=>(
                <li key={caracteristica.ID} > <b>{caracteristica}</b>
                </li>
              ))}</div>
              <hr />
            </div>
          ))}
        </div>
    </div>
  )*/
/*iterando json 3 de crisis
 /*return (
<div>
  <div className="tituloprincipal"><h1>Crisis </h1></div>
  <div className="empresas-container">
    {crisis_economicas.map((crisi)=>(
      <div className="tarjeta" key={(crisi.titulo)}>
      <div className="titulosecundario"><h1>{crisi.titulo}</h1></div>
      <h2><p><b>Descripcion:</b></p></h2>
      <div className="caja1">
        <p><b>{crisi.descripcion}</b></p>
        <img src={crisi.imagen_de_referencia} alt={crisi.titulo} />
      </div>
      <h3>  <p>Caracteristicas: </p></h3>
        <li>Fecha:{crisi.caracteristicas.fecha}</li>
        <li>Impacto:{crisi.caracteristicas.impacto}</li>
     </div>
    ))}
  </div>
 </div>
 )*/

}
export default Custom