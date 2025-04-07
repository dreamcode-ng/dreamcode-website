import React, {useRef, useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import ContainerCircule from '@/components/UI/Containers/ContainersCircule'
import ContainerSection from '@/components/UI/Containers/ContainerSection';
//import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import style from './form.module.css';
import { RECAPTCHA_SITEKEY } from '@/assets/Constants';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import ReactGA from 'react-ga';
import { useTranslation } from 'react-i18next';


function Form ({ noTitle }) {

      const { t } = useTranslation('form');
      const form = useRef();

        const [recaptchaValid, setRecaptchaValid] = useState(false);
        const RecaptchaChange = (value) => {

        setRecaptchaValid(!!value);
        console.log("Captcha value:", value);
    }
      const sendEmail = (event) => {

        event.preventDefault();

        if(recaptchaValid) {
            emailjs.sendForm('service_gmail', 'template_careers', event.target, 'user_DK3x36R2nsn4W5NwGBIou')

            .then((result) => {
                swal({
                    title: t('form_text_modal'),
                    icon: "success",
                });
                console.log(result.text + " ENVIADO");
            }, (error) => {
                console.log(error.text + " ERROR");
            });

            setTimeout(function() {
                event.target.reset(); 
            }, 2000);

        } else {
            swal({
                title: "Error!!!",
                icon: "warning",
            });
            console.log('Error al enviar el formulario');
        }
  
    };

      function handleClick() {
        ReactGA.event({
            category: 'Botón',
            action: 'Clic en botón de enviar formulario',
        });
    }

  return (
    <ContainerSection >
        <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12 col-md-12">
                <ContainerCircule className={style.form}>
                    {  
                    !noTitle && 
                        <div className='py-5'>
                            <h2 className='m_color f-lg-40 text-center'>
                            {t('form_careers')}
                            </h2>
                            <p className='p_color f-lg-20 text-center mb-5'>{t('form_subtitle_careers')}</p>
                        </div>    
                    }

                    <form ref={form} onSubmit={sendEmail} className="needs-validation was-validated" method="post" id="contactForm" >
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">{t('form_input_name')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="text" name="name" id="inputNombre" placeholder={t("form_placeholder_name")} required /> 
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
                                    <input className="form-control input" type="text" name="position" id="position"  placeholder="Front-end engineer" required/>
                                </div>
                            </div>  
                            <div className="col-lg-12 mt-5">                
                                <label className="text-left f_600 w_color" htmlFor="exampleFormControlSelect1">{t("form_label_file_name")}<code className="w_color"> (Max. 400kb)</code></label>
                                <div className="form-group text-left mt-3">
                                    <input type="file" name="file" id="file" accept="application/pdf, .doc, .docx, .odf" className="w-100 m_color" required/>
                                    <div className="valid-feedback">{t("form_label_file_valid")}</div>        
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
                                    <div className="form-group text-left mt-3 col-lg-6">
                                        <input className="form-control  input" type="text" name="linkedin" id="linkedin"  placeholder={t('input_lindekin')} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group d-flex justify-content-center my-5">
                                <ReCAPTCHA
                                    sitekey={`${RECAPTCHA_SITEKEY}`}
                                    onChange={RecaptchaChange} />
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <button onClick={handleClick} disabled={!recaptchaValid} type="submit" className='w-100 text-center border-0 text-dark -bg-cian f-lg-18 f_600 rounded-pill px-4 py-3 ' >
                                    <span>{t('form_careers_btn')} </span>
                                </button>
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