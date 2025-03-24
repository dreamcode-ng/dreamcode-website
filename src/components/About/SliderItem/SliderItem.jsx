"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import { IoRocketOutline } from "react-icons/io5";
import styles from './sliderItem.module.css'
import Image from 'next/image';
import { useTranslation } from "react-i18next";


function SliderItems ({ text }) {
    return (
        <div className="d-flex gap-3 flex-column align-items-center">
            <div className='w-100 position-relative d-flex flex-row align-items-center justify-content-start gap-2'>
                <div className={styles.line} />
                <Image className={styles.icon} alt="" src="/img/about/icon-slider.svg" width={44} height={44}/>
                <div className={styles.line} />
            </div>
            <p className="text-center w_color f-lg-20 ">{text}</p>
            <IoRocketOutline color='#3BF7E4' size={30} />
        </div>
    )
}


export default function SliderItem( ) {

  const { t } = useTranslation('about');
  
  return (
    <>
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 35,
                    },
                  }}
                autoHeight={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[Autoplay, Pagination]}
                className=" py-4 "
                >
                <SwiperSlide >                          
                  <SliderItems text={t('slider_technology')}/>
                </SwiperSlide>
                <SwiperSlide >                          
                  <SliderItems text={t('slider_organizations')}/>
                </SwiperSlide>
                <SwiperSlide >                          
                  <SliderItems text={t('slider_adoption')}/>
                </SwiperSlide>
        </Swiper>
    </>
  )
}

