import React from 'react';
import SolutionsCardItem from '@/components/UI/SolutionsCard/Card';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function ServicesHome() {

let description = "Gestiona tu información de manera eficiente, llevando la productividad y la toma de decisiones a nuevos niveles."

  return (
    <ContainerSection>
        <div className="row justify-content-center">
            <h2 className='w_color text-center display-2 f_700 pb-5'>Nuestras soluciones</h2>
            <SolutionsCardItem
                withAnimation 
                title="Staff Augmentation"
                description={description}
                animationName="code" />
            <SolutionsCardItem
                withAnimation 
                title="Desarrollo de software"
                description={description}
                animationName="code" />
            <SolutionsCardItem
                withAnimation 
                title="Modernización de sistemas"
                description={description}
                animationName="code" />
            <SolutionsCardItem
                withAnimation 
                title="Gestión de bases de datos"
                description={description}
                animationName="code" />        
            <SolutionsCardItem
                withAnimation 
                title="Consultoría tecnológica"
                description={description}
                animationName="code" />
        </div>
    </ContainerSection>
  )
}

export default ServicesHome;