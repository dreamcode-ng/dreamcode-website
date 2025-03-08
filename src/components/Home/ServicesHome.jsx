import React from 'react';
import SolutionsCard from '@/components/UI/SolutionsCard/Card';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function ServicesHome() {

let description = "Gestiona tu información de manera eficiente, llevando la productividad y la toma de decisiones a nuevos niveles."

  return (
    <ContainerSection>
        <div className="row justify-content-center">
            <h2 className='w_color text-center display-2 f_700 pb-5'>Nuestras soluciones</h2>
            <SolutionsCard 
                title="Desarrollo de software"
                description={description}
                animationName="code" />
            <SolutionsCard 
                title="Desarrollo de software"
                description={description}
                animationName="code" />
            <SolutionsCard 
                title="Desarrollo de software"
                description={description}
                animationName="code" />
            <SolutionsCard 
                title="Desarrollo de software"
                description={description}
                animationName="code" />        
            <SolutionsCard 
                title="Desarrollo de software"
                description={description}
                animationName="code" />
        </div>
    </ContainerSection>
  )
}

export default ServicesHome;