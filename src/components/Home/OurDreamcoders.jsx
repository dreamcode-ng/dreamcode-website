import React from 'react';
import style from './home.module.css';
import ContainerCircule from '../Containers/Containers';
import { ButtonIcon } from '../Buttons/Buttons';
import Image from 'next/image';


function OurDreamcoders() {
  return (
    
    <div className="container-dc container py-5">
        <ContainerCircule className={style.ourDreamcoders}>

            
            {/* <div className="banner-container position-relative">
                <div className="row position-relative">
                    <div className="col-lg-7 banner-text p-5">
                    <h2 className="f-lg-40 f-sm-20 text-white text-center text-lg-start">
                        Nuestros <span className="f_800 m_color">DreamCoders</span> dicen que somos un excelente lugar para trabajar
                    </h2>
                    <ButtonIcon link="/blog" text="Ver más +" />
                    </div>
                    <div className="col-lg-5">
                    </div>
                </div>
            </div> */}
                <div className="banner-container d-flex">
      <div className="row g-0">
        {/* Columna 1: Texto y Botón */}
        <div className="col-sm-12 col-md-12 col-lg-7 content-column ">
            <h2 className="f-lg-45 f-sm-25 text-white text-center text-lg-start">
                Nuestros <span className="f_800 m_color">DreamCoders</span> dicen que somos un excelente lugar para trabajar
            </h2>
            <ButtonIcon link="/blog" text="Ver más +" />
          </div>

        {/* Columna 2: Solo para estructura en Bootstrap */}
        <div className="col-sm-12 col-md-12 col-lg-5 image-column"></div>
      </div>
    </div>
        </ContainerCircule>
    </div>
  )
}

export default OurDreamcoders;