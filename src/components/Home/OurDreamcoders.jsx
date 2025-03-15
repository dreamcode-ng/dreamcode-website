import React from 'react';
import style from './home.module.css';
import ContainerCircule from '../UI/Containers/ContainersCircule';
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import { ButtonIcon } from '../UI/Buttons/Buttons';


function OurDreamcoders() {
  return (
    
    <ContainerSection>
        <ContainerCircule className={style.ourDreamcoders}>
          <div className="banner-container d-flex position-relative w-100 z-index-9">
            <div className="row g-0">
              <div className="col-sm-12 col-md-12 col-lg-7 content-column ">
                  <h2 className="f-lg-45 f-sm-25 text-white text-center text-lg-start">
                      Nuestros <span className="f_800 m_color">DreamCoders</span> dicen que somos un excelente lugar para trabajar
                  </h2>
                  <ButtonIcon className="align-items-start mt-5" link="/blog" text="Ver más +" />
                </div>
              <div className="col-sm-12 col-md-12 col-lg-5 image-column"></div>
            </div>
          </div>
        </ContainerCircule>
    </ContainerSection>
  )
}

export default OurDreamcoders;