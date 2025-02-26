import React from 'react';
import SolutionsCard from '@/components/SolutionsCard/Card';


function ServicesHome() {
  return (
    <div className="container-dc container  py-5">
        <div className="row justify-content-center">
            <h2 className='w_color text-center display-2 f_700 pb-5'>Nuestras soluciones</h2>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <SolutionsCard 
            title="Desarrollo de software"
            />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <SolutionsCard 
            title="Desarrollo de software"
            />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <SolutionsCard 
            title="Desarrollo de software"
            />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <SolutionsCard 
            title="Desarrollo de software"
            />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
            <SolutionsCard 
            title="Desarrollo de software"
            />
        </div>
        </div>
    </div>
  )
}

export default ServicesHome;