import React from 'react'
//archivo css 
//import custom from './custom.css'
//archivo json 
import empresasValiosas from '../json-empresas-valiosas'
import fraude from '../json-criptos-fraudes'
import crisisinformacion from '../crisis-recientes'


const Custom = () => {
  /*const informacion = empresasValiosas;
  return (
    <div >
      <div className="tituloprincipal"><h1>{informacion.descripcion}</h1></div>
      <div className="empresas-container">
          {informacion.empresas.map((empresa) => (
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
  );*/
  /*const fraudes=fraude;
  return(

    <div>
      <div className="tituloprincipal"><h1>Fraudes</h1></div>
      <div className='empresas-container'>
          {fraudes.fraudes_cripto.map((fraude) => (
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
 const crisis=crisisinformacion;
 return (

<div>
  <div className="tituloprincipal"><h1>Crisis </h1></div>
  <div className="empresas-container">
    {crisis.crisis_economicas.map((crisi)=>(
      <div className="tarjeta" key={(crisi.titulo)}>
      <div className="titulosecundario"><h1>{crisi.titulo}</h1></div>
      <h2><p><b>Descripcion:</b></p></h2>
      <div className="caja1">
        <p><b>{crisi.descripcion}</b></p>
        <img src={crisi.imagen_de_referencia} alt={crisi.titulo} />
      </div>
      <h3>  <p>Caracteristicas: </p></h3>
      <div>{Object.entries(crisi.caracteristicas).map((caracteristica)=>(
        <div>key={caracteristica.ID}</div>
      ))}</div>
     </div>

    ))}
  </div>
 </div>








  
 )

}
export default Custom