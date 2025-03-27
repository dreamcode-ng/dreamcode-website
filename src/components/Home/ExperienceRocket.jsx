import React from 'react'
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import AnimationUse from '@/assets/animations/AnimationUse';
import style from './home.module.css';
import { useTranslation } from 'next-i18next';
import { ButtonIcon } from '../UI/Buttons/Buttons';


function ExperienceRocket() {

    const { t } = useTranslation('home');
  
  return (
      <ContainerSection>
        <ContainerCircule className={style.experience}>
          <div className=" row align-items-center">
            <div className="col-12 col-lg-8">
              <h2 className="f-lg-40 f-sm-30 z-index-9 position-relative  w_color text-start">
                {t('title_experience1')} <span className='f_800 m_color'>{t('title_experience2')}</span>
              </h2>
              <p className=" mt-3 f-lg-20 p_color text-lg-start">
                <strong>{t('text_experience')}</strong></p>
              <ButtonIcon className="align-items-start mt-5 mt-5" link="/projects" text={t('btn_read_more')} />            
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



