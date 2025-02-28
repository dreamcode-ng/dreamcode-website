import React from 'react';
import SolutionsCard from '@/components/SolutionsCard/Card';


function ServicesHome() {

let description = "Gestiona tu información de manera eficiente, llevando la productividad y la toma de decisiones a nuevos niveles."

  return (
    <div className="container-dc container  py-5">
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
    </div>
  )
}

export default ServicesHome;