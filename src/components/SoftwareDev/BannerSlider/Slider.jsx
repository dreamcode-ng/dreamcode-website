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
  console.log(words);
  

  return (
    <>
      <Swiper
        effect={'flip'}
        direction={'vertical'}
        autoplay={{ delay: 3000 }}
        modules={[EffectFlip, Autoplay]}
        className={style.slider_words}
      >
        {
          words.map((item, i) =>{return(<SwiperSlide key={i}><h3 className='bg-dark w_color f_800'>{item}</h3></SwiperSlide>)})
        }
      </Swiper>
    </>
  );
}
