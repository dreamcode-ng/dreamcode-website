import React from 'react';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule'
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import style from './form.module.css';
import { useTranslation } from 'react-i18next';


function Form () {

      const { t } = useTranslation('form');

  return (
    <ContainerSection >
        <div className="row justify-content-center">
            <div className="col-lg-9 col-sm-12 col-md-12">
                <ContainerCircule className={style.form}>
                    <div className='py-5'>
                        <h2 className='m_color f-lg-40 text-center'>
                        {t('form_careers')}
                        </h2>
                        <p className='p_color f-lg-20 text-center mb-5'>{t('form_subtitle_careers')}</p>
                    </div>      
                    <form className="needs-validation was-validated" method="post" id="contactForm" >
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">{t('form_input_name')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="text" name="nombre" id="inputNombre" placeholder={t("form_placeholder_name")} required /> 
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">{t('form_input_email')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="email" name="email" id="inputEmail4" placeholder="aspirante@mail.com" required/>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-5">
                                <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">{t('form_input_position')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="text" name="position" id="position"  placeholder="Front-end engineer" required/>
                                </div>
                            </div>                             
                            <div className="col-lg-12 mt-5 ">
                                <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">{t('form_careers_message')}</label>
                                <div className="form-group text-left mt-3">
                                    <textarea className="form-control input"  name="message" id="message" cols="30" rows="10" placeholder={t('form_careers_placeholder_message')} required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12 ">
                                <div className="form-check d-flex flex-wrap align-items-center justify-content-center mt-5">
                                    <label className="text-center f_600 w_color w-100" htmlFor="exampleFormControlSelect1">{t('text_lindekin')}</label>
                                    <div className="form-group text-left mt-3">
                                        <input className="form-control  input" type="text" name="linkedin" id="linkedin"  placeholder={t('input_lindekin')} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <ButtonIcon className="text-center mt-5" link="/blog" text={t('form_careers_btn')} />
                            </div>
                        </div>    
                    </form>
                </ContainerCircule>
            </div>
        </div>
    </ContainerSection>
  )
}

export default Form;