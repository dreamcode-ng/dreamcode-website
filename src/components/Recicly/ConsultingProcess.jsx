import React from 'react';
import style from './recicly.module.css';
import { StarIcon } from '@/assets/iconos/svgCall';

function StepItem ({ number , title, description }) {


    
    return (
        <div className="h-100 gap-2 col-sm-12 col-lg col-md-6 px-4">
            <div className={` pb-3`}>
                <div>{number}</div>
                <h3 className='w_color f-lg-20'>{title}</h3>
            </div>
            <p className="text-start f-lg-15 p_color">
                {description}
            </p>
        </div>
    )
}


export default function ConsultingProcess() {

let description = "Comenzamos con un análisis integral del estado actual de tu empresa, identificando áreas clave de mejora y posibles desafíos. Con esta información, diseñamos una estrategia que conecta la tecnología con los objetivos de tu negocio."

  return (
    <div className="container-dc container py-5">
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
                    <div className={`col-lg-8 col-md-6`}>
                        <div className={`${style.challenge} consulting_box`}>
                            <div className={`${style.talent_box} d-flex align-items-center justify-content-center row w-100`}>
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                            </div>
                            <div className={`${style.talent_box} d-flex align-items-center justify-content-center row w-100`}>
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                                <StepItem 
                                    number="1"
                                    title="Planificacion estrategica"
                                    description={description} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

