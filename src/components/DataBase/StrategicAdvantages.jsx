import React from 'react';
import SolutionsCardItem from '@/components/UI/SolutionsCard/Card';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function StrategicAdvantages() {

let description = "Escalamos tus infraestructuras de datos de forma ágil, asegurando que su crecimiento no afecte el rendimiento ni la disponibilidad."

  return (
    <ContainerSection>
        <div className="row justify-content-center">
            <h2 className='w_color text-center display-5 f_700 pb-5'>Ventajas estratégicas a través de tus datos</h2>
            <SolutionsCardItem 
                title="Rendimiento en tiempo real:"
                description={description}
                animationName="code" />
            <SolutionsCardItem 
                title="Disponibilidad 24/7:"
                description={description}
                animationName="code" />
            <SolutionsCardItem 
                title="Modernización de sistemas"
                description={description}
                animationName="code" />
            <SolutionsCardItem 
                title="Gestión de bases de datos"
                description={description}
                animationName="code" />        
            <SolutionsCardItem 
                title="Consultoría tecnológica"
                description={description}
                animationName="code" />
        </div>
    </ContainerSection>
  )
}

export default StrategicAdvantages;