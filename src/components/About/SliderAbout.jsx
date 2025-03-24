import React from 'react';
import styles from "./about.module.css";
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import Image from 'next/image';
import { Trans } from 'react-i18next';
import SliderItems from './SliderItem/SliderItem';

function SliderAbout() {
  return (
    <ContainerSection>  
        <ContainerCircule className={styles.sliderAbout}>
            <div className='row d-flex align-items-center'>
                <h2 className='col-lg-5 lh-1 w_color f_700 f-lg-70 f-sm-40'>
                {            
                  <Trans i18nKey="title_slider" ns="about">
                    ¿Qué <span className='ps-5'>pensamos?</span>
                  </Trans>
                }
                </h2>
                <Image src={`/img/about/flecha.svg`} width={600} height={40} className='col-lg-7'/>
            </div>
            <div className='col-12'>
                <SliderItems />
            </div>
        </ContainerCircule>
    </ContainerSection>
            
  )
}

export default SliderAbout;