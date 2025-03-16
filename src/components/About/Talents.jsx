import React from 'react';
import {useTranslation, Trans} from'react-i18next';
import style from './about.module.css'
import Image from 'next/image';
import ContainerSection from '../UI/Containers/ContainerSection';
function Talents() {

    const {t} = useTranslation();

  return (
    <ContainerSection>
        <section className={`${style.talents} sec_pad `}>
            <div className='container mt_80'>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                            <Image src={("/img/dreamcoders/simbolo-Humanos.png")}   alt={t("dreamcoders.talents_humans_title")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>Humanos</h4>
                            <p className='w_color'>humans_description</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                        <Image src="/img/dreamcoders/simbolo-Innovators.png"
                            alt={t("dreamcoders.talents_Innovators_title")} height={200} width={100} loading='lazy' />

                            <h4 className='w_color f-lg-40 f_600'>Innovadores</h4>
                            <p className='w_color'>Innovators_description</p>
                        </div>                   
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                            <Image src={("/img/dreamcoders/simbolo-Agiles.png")} alt={t("dreamcoders.talents_Agile_title")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>Ágiles</h4>
                            <p className='w_color'>en la creación y desarrollo de soluciones destacadas</p>                    
                        </div>                    
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="text-center img-fondo py-3 mb-3">
                            <Image className='' src={("/img/dreamcoders/simbolo-Motivados.png")} alt={t("dreamcoders.talents_Motivated_title")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>Motivados</h4>
                            <p className='w_color line-break'>en la creación y desarrollo de soluciones destacadas</p>                   
                        </div>           
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="text-center py-3 mb-3">
                            <Image src={("/img/dreamcoders/simbolo-Soñadores.png")} alt={t("dreamcoders.talents_Dreamers_title")} height={200} width={100} loading='lazy' />
                            <h4 className='w_color f-lg-40 f_600'>Soñadores</h4>
                            <p className='w_color'>en la creación y desarrollo de soluciones destacadas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </ContainerSection>

)
}

    

export default Talents;