import React from 'react';
import style from './recicly.module.css';
import ContainerCircule from '@/components/Containers/ContainersCircule';

function TalentBox() {
  return (
    <div className="container-dc container py-5">
      <ContainerCircule className={style.talent_box}>
        <div className="talent-box row w-100">
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
              <h2 className="f-lg-25 m_color">Nuestro talento 
              <span className="f_700"><br></br> TECH</span></h2>       
          </div>
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">Es ágil en la realización de proyectos</p>
          </div>
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">Facilita el trabajo y los procesos de adaptación tecnológica</p>
          </div>
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">Genera valor a través del compromiso y la cohesión</p>
          </div>
        </div>
        <div className="talent-box row w-100">
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">
            Posee el conocimiento, la experiencia técnica y humana, a favor de los procesos de transformación
            </p>
          </div>
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">Es ágil en la realización de proyectos</p>
          </div>
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">Facilita el trabajo y los procesos de adaptación tecnológica</p>
          </div>
          <div className="h-100 col-sm-12 col-lg col-md-6 px-4">
            <div className="icon-wrapper pb-3">
              <img src="/img/staff-augmentation/talent-valor.svg" alt="icon" />
            </div>
            <p className="text-start f-lg-15 p_color">Genera valor a través del compromiso y la cohesión</p>
          </div>
        </div>
      </ContainerCircule>
    </div>
  )
}

export default TalentBox;