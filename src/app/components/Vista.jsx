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
            key={empresa.titulo} 
            titulo={empresa.titulo}
            descripcion={empresa.descripcion}
            imagen={empresa.imagen}
            caracteristicas={empresa.caracteristicas}
            /> 
          ))}

</div>*/
/*para el json de fraudes y crisis*/
<div>

{fraudes_cripto.map((fraude) => (
            <Custom  
            key={fraude.titulo} 
            titulo={fraude.titulo}
            descripcion={fraude.descripcion}
            imagen={fraude.imagen_de_referencia}
             caracteristicas={fraude.caracteristicas}
             />
          ))}
</div>


    
    
  )
}
export default Vista