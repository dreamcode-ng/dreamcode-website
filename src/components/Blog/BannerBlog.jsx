"use client"
import React from 'react';
import style from './blog.module.css';
import { useTranslation } from 'react-i18next';

function BannerBlog() {

  const { t } = useTranslation('blog');

  return (
    <section className={`d-flex flex-column align-items-center ${style.banner_blog}`} id="blog">
            <div className="container d-flex justify-content-center align-items-center">                      
                <div className="row ">
                    <div className="col-md-12 col-lg-12 col-sm-12 text-center">
                        <h1 className="f-lg-90 f-sm-40 w_color f_700">DreamBlog</h1>        
                    </div>
                </div>
            </div>
            <h2 className='m_color f-lg-30 f-sm-20 text-center mb-4 f_700' >{t('subtitle_blog')}</h2>
    </section>
  )
}

export default BannerBlog;