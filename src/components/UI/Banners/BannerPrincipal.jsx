import React from 'react';
import Link from 'next/link';
import Wave from '@/components/UI/Reusable/Wave';
import { useTranslation, Trans } from 'react-i18next';


function BannerHome({ withWave = false , title , subtitle, className}) {

        const { t } = useTranslation('home');


  return (
    <div className='banner-home line-break d-flex align-items-center justify-content-center text-white text-center '>     
        <div className='container pb-5'>
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 d-flex flex-column align-items-center text-center wave-container">         
                { 
                    withWave 
                    && 
                    <Wave 
                        className="flex-row-reverse -bg-dark"
                        icon_class="-bg-secondary "
                        icon="👋"
                        text="We welcome you to the future
"
                    />}
                
                <h1 className="display-1 f_500 py-4">
                    {title}
                </h1>
                <p className="m_color fs-5">
                    <Link href='/about' className='m_color'>
                        {subtitle}
                    </Link>
                </p>
            </div>
        </div>
        </div> 
  </div>
  )
}

export default BannerHome;