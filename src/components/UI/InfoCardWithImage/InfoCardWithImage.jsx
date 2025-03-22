import React from 'react';
import style from './infoCardWithImage.module.css';
import ContainerCircule from '../Containers/ContainersCircule';
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import { ButtonIcon } from '../Buttons/Buttons';


function OurDreamcoders( { withButton = false, isAbout = false , text, link, title , btn }) {
  return (
    
    <ContainerSection>
        <ContainerCircule className={style.infoCardWithImage}>
          <div className={`${style.banner_container} ${!isAbout ? style.about : style.index } d-flex position-relative w-100 z-index-9`}>
            <div className="row g-0">
              <div className={`col-sm-12 col-md-12 col-lg-7 ${style.content_column}`}>
                  <h2 className="f-lg-40 f-sm-25 text-white text-center text-lg-start">
                      {title}
                  </h2>
                  { withButton ?  
                    <ButtonIcon className="align-items-lg-start mt-5 align-items-center" link={link} text={btn} />
                    : <p className='f-lg-18 f_300 p_color'>{text}</p> }
                </div>
              <div className={`col-sm-12 col-md-12 col-lg-5 ${style.image_column}`}></div>
            </div>
          </div>
        </ContainerCircule>
    </ContainerSection>
  )
}

export default OurDreamcoders;