import React from 'react'

 const Custom = ({titulo,descripcion,caracteristicas,imagen}) => {
  return (
    /*<div >
      <div className="tituloprincipal"><h1>Empresas</h1></div>
      <div className="empresas-container">
            <div  className="tarjeta"> 
              <div className="titulosecundario"><h1>{titulo}</h1></div>
              <h2><p><b>Descripcion:</b></p></h2>
              <div className="caja1">
                <p><b>{descripcion}</b></p>
                <img src={imagen} alt={titulo} /></div>
              <h3>  <p>Caracteristicas:</p></h3>
              <p> <b>{caracteristicas}</b></p>
              <hr />
            </div>
        </div>
      </div>*/

      /*fraudes*/
   /* <div>
    <div className="tituloprincipal"><h1>Fraudes</h1></div>
    <div className='empresas-container'>
        
          <div key={titulo} className="tarjeta">
            <div className="titulosecundario"><h1>{titulo}</h1></div>
            
            <h2><p><b>Descripcion:</b></p></h2>
            <div className="caja1">
              <p><b>{descripcion}</b></p>
              <img src={imagen} />
              </div>
            <h3>  <p>Caracteristicas: </p></h3>
            <div> {caracteristicas.map((caracteristica)=>(
              <li key={caracteristica.ID} > <b>{caracteristica}</b>
              </li>
            ))}</div>
            <hr />
          </div>      
      </div>
  </div>*/

  /*crisis*/
  
<div>
  <div className="tituloprincipal"><h1>Crisis </h1></div>
  <div className="empresas-container">
      <div className="tarjeta" key={titulo}>
      <div className="titulosecundario"><h1>{titulo}</h1></div>
      <h2><p><b>Descripcion:</b></p></h2>
      <div className="caja1">
        <p><b>{descripcion}</b></p>
        <img src={imagen} />
      </div>
      <h3>  <p>Caracteristicas: </p></h3>
      <ul> <li>Fecha:{caracteristicas.fecha}</li>
      <li>Impacto:{caracteristicas.impacto}</li></ul>
       
     </div>
  </div>
 </div>

  )
}

export default Custom;
