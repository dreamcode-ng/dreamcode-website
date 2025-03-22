"use client"
import React from 'react';
import style from './bannerSlider.module.css'
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip, Autoplay } from 'swiper/modules';

export default function SliderWords() {

 const { t } = useTranslation();

 const sliderWords = [
    "Increase competitiveness",
    "Maximize operational efficiency",
    "Strengthen customer experience",
    "Automate tasks",
    "Optimize costs",
    "Improve processes",
    "Innovate in products/services",
    "Solve challenges",
    "Evolve in the market"
]

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
          sliderWords.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <h3 className='bg-dark w_color f_800'>{item}</h3>
              </SwiperSlide>
            )
          })

        }
      </Swiper>
    </>
  );
}
