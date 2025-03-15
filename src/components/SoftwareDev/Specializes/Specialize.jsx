import ContainerSection from '@/components/UI/Containers/ContainerSection';
import React from 'react';
import style from './specialize.module.css';
import { FaAndroid, FaApple } from "react-icons/fa";
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';

export default function Specialize( { title }) {
  return (
    <ContainerSection>
                <div className='mb-5'>
                    <h2 className='text-center f-lg-35 m_color'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center'>
                        <SpecializeItem title="Desarrollo de aplicaciones móviles" />
                        <SpecializeItem title="Desarrollo de aplicaciones Web" />
                        <SpecializeItem title="Integraciones de Sistemas y APIs" />
                        <SpecializeItem title="Automatización de procesos" />
                    </div>
                </div>
                <ButtonIcon text="Hablemos →" link="" className="align-items-center mt-5"/>
    </ContainerSection>
  )
}


function SpecializeItem ( { title, date }) {

 const textTemporal = "Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android, diseñadas para cumplir los objetivos estratégicos de tu negocio.  Utilizamos tecnologías de vanguardia que garantizan un rendimiento superior, maximizan la eficiencia de los recursos y proporcionan una experiencia de usuario fluida y fácil de usar."
 const textTemporal2 = "Soluciones móviles ágiles, seguras y escalables que fortalecen la conexión entre tu negocio y tus clientes, mejorando la interacción y ampliando tu presencia digital en diversas plataformas."


    return (
        <div className='col-lg-3 col-md-6 col-sm-12'>
            <div  className={`${style.specializeItem} gap-3 w-100 h-lg-auto`}>
                <h3 className='w_color f-lg-20 f_500' >{ title } </h3>          
                <div className={`${style.specializeTags}`} >
                    <div className="-bg-secondary d-flex ">
                        <div className="text-center p_color f_300 f-lg-12">
                            <FaAndroid />
                        </div>
                    </div>
                    <div className="-bg-secondary d-flex ">
                        <div className="text-center p_color f_300 f-lg-12">
                            <FaApple />                                                                                   
                        </div>
                    </div>
                </div>
                <div>
                    <p className="f-lg-14">{textTemporal}</p>
                    <p className='my-3 m_color f_700'>Lo que logramos:</p>
                    <p className="f-lg-14">{textTemporal2}</p>
                </div>
            </div>
        </div>
    )
}
