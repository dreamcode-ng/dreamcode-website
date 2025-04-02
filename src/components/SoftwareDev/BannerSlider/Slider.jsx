"use client"
import React from 'react';
import style from './bannerSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip, Autoplay } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function SliderWords() {
  
    const { t } = useTranslation('software');  

  return (
    <>
      <Swiper
        effect={'flip'}
        direction={'vertical'}
        autoplay={{ delay: 3000 }}
        modules={[EffectFlip, Autoplay]}
        className={style.slider_words}
      >
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('increase')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('maximize')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('strengthen')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('automate')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('optimize')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('improve')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('innovate')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('solve')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800 pb-2 m-0 f-sm-18'>{t('evolve')}</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
