import React from 'react';
import style from './recicly.module.css';
import { StarIcon } from '@/assets/iconos/svgCall';
import { BoxContainer , BoxChild } from '@/components/UI/Common/Common';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function StepItem ({ number , title, description }) {

    
    return (
        <BoxChild className='gap-3 d-flex flex-column' >
            <div className={`${style.icon} d-flex justify-content-around align-items-center gap-2`}>
                <div className='p-3 w_color'>
                    {number}
                </div>
                <h3 className='w_color f-lg-20 m-0'>{title}</h3>
            </div>
            <p className="text-start f-lg-15 p_color">
                {description}
            </p>
        </BoxChild>
    )
}


export default function ConsultingProcess() {

let description = "Comenzamos con un análisis integral del estado actual de tu empresa, identificando áreas clave de mejora y posibles desafíos. Con esta información, diseñamos una estrategia que conecta la tecnología con los objetivos de tu negocio."

  return (
    <ContainerSection>
        <div className={`${style.consulting_process} position-relative`}>
            <div className="container">
                <div className="row flex-sm-column-reverse flex-lg-row">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="text-start mb-3 mt-5">
                            <StarIcon />
                            <h2 className='mt-3 m_color text-start'>
                                Un proceso completo en consultoría
                            </h2>
                        </div>
                    </div>
                    <div className={`col-lg-8 col-md-12 col-sm-12`}>
                        <div className={`${style.consulting_content} box_shadow`}>
                            <BoxContainer >
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                            </BoxContainer>
                            <BoxContainer className={style.talent_box}>
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                            </BoxContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContainerSection>
    
  )
}

