import React from 'react'
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import AnimationUse from '@/assets/animations/AnimationUse';
import style from './home.module.css';
import { ButtonIcon } from '../UI/Buttons/Buttons';


function ExperienceRocket() {
  return (
      <ContainerSection>
        <ContainerCircule className={style.experience}>
          <div className=" row align-items-center">
            <div className="col-12 col-lg-8">
              <h2 className="f-lg-40 f-sm-25 text-center w_color text-lg-start">
              + de 11 años de experiencia <span className='f_800 m_color'>construyendo soluciones</span>
              </h2>
              <p className="text-center f-lg-20 p_color text-lg-start">
              En las industrias Retail, Telecomunicaciones, Seguros, Fintech, Tecnología.</p>
              <ButtonIcon className="align-items-start" link="/blog" text="Ver más +" />
              
            </div>
            <div className="col-12 col-lg-4">
              <AnimationUse animationName="rocket"/>
            </div>
          </div>
        </ContainerCircule>




      </ContainerSection>
  )
}

export default ExperienceRocket;



