import React from 'react';
import SliderWords from './Slider';
import style from './bannerSlider.module.css';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';

function BannerSlider() {

    const { t } = useTranslation('software');

  return (
    <>
        <section className={style.banner_btn}>
            <div className='container-dc container'>
                <div className='row d_flex align-items-center justify-content-center'>
                    <div className='col-lg-8 text-left'>
                        <h3 className='w_color f_700'>{t('title_slider')}</h3>
                        <SliderWords />
                    </div>
                    <div className='col-lg-4'>
                        <ButtonIcon link="/" text={t('btn_slider')} className="align-items-center m-0" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default BannerSlider;