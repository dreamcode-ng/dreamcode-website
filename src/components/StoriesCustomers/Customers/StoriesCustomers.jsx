import React from "react";
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import style from '@/components/StoriesCustomers/stories.module.css'
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Stories() {

  const { t } = useTranslation('stories');

  const storieslist = t('customers_stories', { returnObjects: true })  

  return (
    <section className={`${style.stories_customers} customers_stories line-break`}>
      <div className="container">
        <div className="text-center pb-3">
          <h2 className="text-center m_color f-lg-30 f_600 mb-4">
            {t('subtitle_stories')}
          </h2>
        </div> 

        { 
          storieslist.map((section, index) => (
            <ContentSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              text={section.text}
              image={section.image}
              isSlider={section.isSlider}
              paragraph={section.paragraph || []}
            />
          ))
        }
      </div>
    </section>
  );
}

function ContentSection ({ title, subtitle, text, image, isSlider, paragraph} ) {

  return (

        <div className={`${style.item_storie} row align-items-center`}>
          <div className="col-lg-6">
            <h2 className="m_color f-lg-30 mb-3">{title}</h2>
            <h3 className="f-lg-20 mb-3"><strong>{subtitle}</strong></h3>
            {isSlider ? (
              <Swiper            
                loop={true}
                pagination={{ 
                  clickable: true, }}
                modules={[Pagination]}
                className="text-start"
                
              >
              {
                paragraph.map((paragraphs, index) => (
                <SwiperSlide key={index}>
                  <h3 className="f-lg-18 mb-3">{paragraphs.subtitle}</h3>
                  <p className="text-start f-lg-18">{paragraphs.text}</p>
                </SwiperSlide>
              ))}             
              </Swiper> 
              ) : (
              <>
                <p className="text-start f-lg-18">{text}</p>
              </>
            )}
          </div>
          <div className={`col-lg-6 text-center ${style.logo_container} `}>
            <Image src={`/img/stories-customers/${image}`} 
              alt="Stories of Customers - DreamCode Software Colombia" 
              style={{ objectFit: 'contain' }}
              width={350} height={100}/>
          </div>
        </div>

  )
}
