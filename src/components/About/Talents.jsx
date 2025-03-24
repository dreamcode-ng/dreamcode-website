import React from 'react';
import {useTranslation, Trans} from'react-i18next';
import style from './about.module.css'
import Image from 'next/image';
import ContainerSection from '../UI/Containers/ContainerSection';
function Talents() {

    const {t} = useTranslation('about');

  return (
    <ContainerSection>
        <section className={`${style.talents} sec_pad `}>
            <div className="mb_70">
                <h2 className="text-center m_color f_700 f-lg-40">{t('talents_title')}</h2>
                <h3 className="text-center p_color f-lg-18">{t('talents_subtitle')}</h3>
            </div>
            <div className='container mt_80'>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                            <Image src={("/img/dreamcoders/simbolo-Humanos.png")}   alt={t("")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>{t('talents_humans_title')}</h4>
                            <p className='w_color'>{t('talents_humans_description')}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                        <Image src="/img/dreamcoders/simbolo-Innovators.png" alt={t("")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>{t('talents_Innovators_title')}</h4>
                            <p className='w_color'>{t('talents_Innovators_description')}</p>
                        </div>                   
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                            <Image src={("/img/dreamcoders/simbolo-Agiles.png")} alt={t("talents_Agile_description")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>{t('talents_Agile_title')}</h4>
                            <p className='w_color'>{t('talents_Agile_description')}</p>                    
                        </div>                    
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                            <Image className='' src={("/img/dreamcoders/simbolo-Motivados.png")} alt={t("talents_Motivated_description")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>{t('talents_Motivated_title')}</h4>
                            <p className='w_color line-break'>{t('talents_Motivated_description')}</p>                   
                        </div>           
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="text-center py-3 mb-3">
                            <Image src={("/img/dreamcoders/simbolo-Soñadores.png")} alt={t("talents_Dreamers_description'")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>{t('talents_Dreamers_title')}</h4>
                            <p className='w_color'>{t('talents_Dreamers_description')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </ContainerSection>

)
}

    

export default Talents;