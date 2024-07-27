import React from 'react'
//importando archivo json 
import {empresas} from '../json-empresas-valiosas'
import {fraudes_cripto} from '../json-criptos-fraudes'
import {crisis_economicas} from '../crisis-recientes'
import Custom from './Custom'

const Vista = () => {
  
  return (
/*<div>
{empresas.map((empresa) => (
           
            <Custom  
            titulouno={<h2>Empresas Valiosas</h2>}
            key={empresa.titulo} 
            titulo={empresa.titulo}
            descripcion={empresa.descripcion}
            imagen={empresa.imagen}
            caracteristicas={empresa.caracteristicas}
            /> 
          ))}

</div>*/
/*<div>
{fraudes_cripto.map((fraude) => (
           
            <Custom  
            key={fraude.titulo} 
            titulo={fraude.titulo}
            descripcion={fraude.descripcion}
            imagen={fraude.imagen_de_referencia}
             caracteristicas={fraude.caracteristicas}
             />
          ))}

</div>*/

<div>
{crisis_economicas.map((crisi) => (
           
            <Custom  
            key={crisi.titulo} 
            titulo={crisi.titulo}
            descripcion={crisi.descripcion}
            imagen={crisi.imagen_de_referencia}
            caracteristicas={crisi.caracteristicas}
             
             />
          ))}

</div>
    
    
  )
}
export default Vista