import React from 'react';
import Link from 'next/link';
import Wave from '@/components/UI/Reusable/Wave';

function BannerHome({ withWave = false , withLink = false,  textWave, title , subtitle, href = "/" , link}) {

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
                        text={textWave}
                    />}
                
                <h1 className="f-lg-70 f_800 py-4">
                    {title}
                </h1>
                {/* <div className='light-effect'></div> */}
                <p className={`${ withLink ? "p_color" : "m_color" } fs-4 w-75`}>{subtitle}</p>
                {
                     withLink 
                     && 
                    <p className="m_color fs-5">
                        <Link href={href} className='m_color'>{link}</Link>
                    </p>
                }
            </div>
        </div>
        </div> 
  </div>
  )
}

export default BannerHome;