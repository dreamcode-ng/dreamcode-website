import React from 'react';
import ContainerSection from '../UI/Containers/ContainerSection';
import style from './careers.module.css';
import Image from 'next/image';

function BannerBenefits({ title, subtitle, description }) {
  return (
    <>
        <ContainerSection>
            <div className={`${style.bannerBenefits} position-relative d-flex justify-content-center`}>
                <div className="col-lg-9 col-sm-12 gap-5 flex-direction-lg-row flex-direction-column">
                    <Image src="/img/careers/Andres.png" width={150} height={250} />                   
                        <div className="light-effect"></div>
                    <div className="w_color text-left pt-3">
                        <h2 className="f-lg-40 m_color f_600 l_height09">{title}</h2>
                        <h3 className="f-lg-20 w_color f_600 mb_30">{subtitle}</h3>  
                        <p className="f-lg-15 w_color f_500">{description}</p>        
                    </div>
                </div>
            </div>
        </ContainerSection>
    </>
  )
}

export default BannerBenefits;