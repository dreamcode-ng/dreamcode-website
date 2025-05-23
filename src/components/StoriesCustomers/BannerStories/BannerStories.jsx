import React from 'react';
import Image from 'next/image';
import { Trans } from "react-i18next";
import { useTranslation } from "next-i18next";
import style from '@/components/StoriesCustomers/stories.module.css'


function BannerStories() {

    const { t } = useTranslation('stories');
    
  return (
    <section className={`${style.banner_stories} line-break banner text-center`} id=''>
        <div className="container">
            <div className="row align-items-center justify-content-center">  
                <div className='mt-4 mb-5 w-100'>
                    <h1 className="mt-4 mb-5 f-lg-50 f-sm-35 m_color f_600">
                        {t('title_banner')}
                    </h1>
                    <a href="/contact" className={`${style.btn__stories} f_500`}>
                        {t('btn_banner')}
                    </a>    
                </div>
                <div className="col-lg-7 mt-4 text-start">
                    <div>
                    ⭐⭐⭐⭐⭐
                    </div>
                    <h2 className="mt-4 f-lg-30 m_color text-start f_600">
                        {t('subtitle_banner')}
                    </h2>
                    <p className="mb-5 w_color text-start f-lg-20 pr_0">
                        {t('text_banner')}
                    </p>
                </div>
                <div className="col-lg-5" >
                    <figure className={style.banner__img} >
                        <Image src="/img/stories-customers/banner-stories-customers-DreamCode.png" 
                            alt="Customers DreamCode Software Colombia" width={500} height={430} loading='lazy' />       
                    </figure>
                </div>          
            </div>
        </div>
    </section>
  )
}

export default BannerStories;