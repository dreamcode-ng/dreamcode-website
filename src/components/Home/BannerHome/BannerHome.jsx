import React, { useState } from 'react';
import Image from "next/image";
import { useTranslation, Trans } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Link from 'next/link';
import Atropos from 'atropos/react';

import {  Video, AreaSlider } from '@/components/Home/BannerHome/SliderHome';




function BannerHome (){

    const { t } = useTranslation('home');

    const [isPlaying, setIsPlaying] = useState(false);

    return(
        <section className='banner-home '>
                <Swiper 
                    autoplay={{ delay: 60000000, disableOnInteraction: true }}
                    modules={[Autoplay, Pagination]}
                    pagination={{
                        clickable: true,
                    }}
                    onAutoplayPause={false}
                    className="slider--home line-break">
                        <SwiperSlide>
                            <Atropos 
                            shadow={false}
                            shadowScale={0}
                            shadowOffset={50}
                            highlight={false} 
                            className='h-100'> 
                                <AreaSlider className='slider-1 justify-content-center align-items-center'>
                                    <h1 data-atropos-offset="5" className='w_color f_600 text-center' >
                                        
                                            <span>Ideas de Negocio</span> para crecer
                                        
                                    </h1>
                                    <div>
                                    <Link className='position-relative z-index-9 w_color mt-5 d-flex align-items-center' href="/staff-augmentation">
                                        <h3 className='f--size-30 f_400 pr-2'>{t('bannerHome.btn_slider_home')}</h3> 
                                        <i className="f_600 ti-angle-right"></i>
                                    </Link> </div>
                                    <Image src="/img/home/figura-1.svg" data-atropos-offset="-5" className='figura-1' width={800} height={700} alt="Figura del slider 1 en 3D" />
                                    <Image src="/img/home/figura-2.svg" data-atropos-offset="5" className='figura-2' width={800} height={700} alt="Figura del slider 1 en 3D" />
                                    <Image src="/img/home/circulos.svg" data-atropos-offset="-5"  width={800} height={700} alt="Figura del slider 1 en 3D" />
                                    <Image src="/img/home/circulos-2.svg" data-atropos-offset="5"  width={800} height={700} alt="Figura del slider 1 en 3D" />
                                </AreaSlider>
                        </Atropos>   
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide" data-swiper-autoplay={isPlaying ? 40000 : 6000}>
                            <div>                        
                                <Atropos 
                                shadow={false}
                                shadowScale={0}
                                shadowOffset={50}
                                highlight={false} >
                                    <AreaSlider className="slider-3 justify-content-center align-items-center">
                                        <div className="container">
                                            <Video isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
                                        </div>
                                    </AreaSlider>
                                </Atropos>
                            </div>
                        </SwiperSlide>

                </Swiper>
        </section>
    )
}    

export default BannerHome;


