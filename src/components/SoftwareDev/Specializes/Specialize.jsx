import ContainerSection from '@/components/UI/Containers/ContainerSection';
import React from 'react';
import style from './specialize.module.css';
import { FaAndroid, FaApple, FaLaptopCode, FaCubes } from "react-icons/fa";
import { MdOutlineLanguage , MdAutoMode} from "react-icons/md";
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';

export default function Specialize( { title }) {
  return (
    <ContainerSection>
                <div className='mb-5'>
                    <h2 className='text-center f-lg-35 m_color f_800'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center'>
                        <SpecializeItem 
                            title="Desarrollo de aplicaciones móviles"
                            text1="Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android, diseñadas para cumplir los objetivos estratégicos de tu negocio.  Utilizamos tecnologías de vanguardia que garantizan un rendimiento superior, maximizan la eficiencia de los recursos y proporcionan una experiencia de usuario fluida y fácil de usar."
                            text2="Soluciones móviles ágiles, seguras y escalables que fortalecen la conexión entre tu negocio y tus clientes, mejorando la interacción y ampliando tu presencia digital en diversas plataformas."
                            icons={[FaAndroid, FaApple]}
                        />
                        <SpecializeItem 
                            title="Desarrollo de aplicaciones Web"
                            text1="Diseñamos aplicaciones web que agilizan la gestión de datos y mejoran la experiencia de usuario. Nuestras soluciones optimizan procesos y aumentan la eficiencia operativa."
                            text2="Plataformas que se integran con otros sistemas, mejoran la colaboración y proporcionan una experiencia fluida que evoluciona conforme a las necesidades de tu negocio."
                            icons={[FaLaptopCode, MdOutlineLanguage]}
                        />
                        <SpecializeItem 
                            title="Integraciones de Sistemas y APIs"
                            text1="La integración de plataformas y sistemas internos optimizan procesos y mejoran el rendimiento general de tu organización, así mismo facilita la colaboración entre equipos, agiliza la toma de decisiones y mejora el flujo de trabajo en todos los niveles."
                            text2="Soluciones eficientes que aumentan la productividad, reducen tiempos operativos y mejoran la eficiencia general, impulsando el rendimiento de tu empresa mediante una integración ágil."
                            icons={[FaCubes]}
                        />
                        <SpecializeItem 
                            title="Automatización de procesos"
                            text1="Optimiza tus procesos operativos eliminando tareas manuales y repetitivas, incrementa la eficacia y reduce costos. Facilitamos el flujo de trabajo liberando recursos para que tu equipo pueda centrarse en actividades de mayor valor."
                            text2="Mayor eficiencia operativa, reducción de tiempos y una organización más ágil, lista para responder rápidamente a las demandas del mercado."
                            icons={[MdAutoMode]}
                        />
                    </div>
                </div>
                <ButtonIcon text="Hablemos →" link="" className="align-items-center mt-5"/>
    </ContainerSection>
  )
}

function SpecializeItem({ title, text1, text2, icons = [] }) {
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div  className={`${style.specializeItem} gap-3 w-100 h-lg-auto`}>
          <h3 className="w_color f-lg-20 f_500">{title}</h3>
  
          <div className={style.specializeTags} >
            {icons.map((Icon, index) => (
              <div key={index} className="-bg-secondary d-flex">
                <div className="text-center p_color f_300 f-lg-12">
                  <Icon />
                </div>
              </div>
            ))}
          </div>
  
          <div>
            <p className="f-lg-14">{text1}</p>
            <p className="my-3 m_color f_700">Lo que logramos:</p>
            <p className="f-lg-14">{text2}</p>
          </div>
        </div>
      </div>
    );
}
  
