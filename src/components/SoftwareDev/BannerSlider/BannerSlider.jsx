import React from 'react';
import SliderWords from './Slider';
import style from './bannerSlider.module.css';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';

function BannerSlider() {
  return (
    <>
        <section className={style.banner_btn}>
            <div className='container-dc container'>
                <div className='row d_flex align-items-center justify-content-center'>
                    <div className='col-lg-8 text-left'>
                        <h3 className='w_color f_700'>Con el desarrollo de software tu negocio</h3>
                        <SliderWords />
                    </div>
                    <div className='col-lg-4'>
                        <ButtonIcon link="/" text="Empieza ahora" className="align-items-center m-0" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BannerSlider;