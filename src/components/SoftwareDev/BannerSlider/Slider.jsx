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
    const words = t('slider_words', { returnObjects: true });
  

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
          <h3 className='bg-dark w_color f_800'>{t('Increase')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Maximize')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Strengthen')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Automate')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Optimize')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Improve')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Innovate')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Solve')}</h3>
        </SwiperSlide>
        <SwiperSlide>
          <h3 className='bg-dark w_color f_800'>{t('Evolve')}</h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
