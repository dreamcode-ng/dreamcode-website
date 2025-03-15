import React from 'react';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import style from './modernization.module.css'

function HowMigrate() {
  return (
    <ContainerSection>
        <div className='row d_flex align-items-center justify-content-center'>
            <div className='col-lg-8'>
                <ContainerCircule className="px-5 py_60">
                    <h2 className='f-lg-35 m_color mb_40 z-index'>¿Cómo la migración puede transformar tu negocio?</h2>
                    <ul>
                        <li className='w_color f-lg-18 mb-3 f_300'>Agiliza tu infraestructura para el futuro</li>
                        <li className='w_color f-lg-18 mb-3 f_300'>Lo conecta con nuevas tecnologías</li>
                        <li className='w_color f-lg-18 mb-3 f_300'>Optimiza operaciones con plataformas avanzadas</li>
                        <li className='w_color f-lg-18 mb-3 f_300'>Agiliza tu infraestructura para el futuro</li>
                        <li className='w_color f-lg-18 mb-3 f_300'>Agiliza tu infraestructura para el futuro</li>
                    </ul>
                </ContainerCircule>
            </div>
        </div>    
    </ContainerSection>
  )
}

export default HowMigrate;