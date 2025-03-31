import React, {useRef} from 'react';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule'
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import style from './form.module.css';
import { useTranslation } from 'react-i18next';
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITEKEY } from '@/assets/Constants';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import ReactGA from 'react-ga';

function Form ( { noTitle }) {

      const { t } = useTranslation('form');
      const form = useRef();
      const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_gmail', 'template_dreamcode', e.target, 'user_DK3x36R2nsn4W5NwGBIou')
          .then((result) => {
              
              swal({
                  title: "Se ha enviado con exito",
                  icon: "success",
                  timer: 3000,
                });
                console.log(result.text);
                console.log('se envio el correo')
          }, (error) => {
              console.log(error.text);
              console.log('NO SE envio el correo')
          });
  
          setTimeout(function() {
              e.target.reset(); // Resetea el formulario después de 3 segundos (3000 milisegundos)
            }, 2000);
      };
  
      // ReCAPTCHA
      function onChange(value) {
          console.log("Captcha value:", value);
      }

      function handleClick() {
        ReactGA.event({
          category: 'Botón',
          action: 'Clic en botón de enviar formulario',
        });
    }

    
  return (
    <ContainerSection idSection="form-primary">
        {
            !noTitle &&
            <div className='py-5'>
                <h2 className='m_color f-lg-40 text-center'>
                    {t('form_title')}
                </h2>
                <p className='p_color f-lg-20 text-center mb-5'>{t('form_subtitle')}</p>
            </div>
        }
        <ContainerCircule className={style.form} >
            <div className="row justify-content-center" >
                <div className="col-lg-12 col-sm-12 col-md-12">    
                    <form className="needs-validation was-validated z-indez-9 position-relative" method="post" id="contactForm" ref={form} onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-lg-3">
                                <label className="text-left f_600 w_color mt-lg-0 mt-3 " htmlFor="exampleFormControlSelect1">{t('form_input_name')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="text" name="name" id="inputNombre" placeholder={t('form_placeholder_name')} required/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label className="text-left f_600 w_color mt-lg-0 mt-3 " htmlFor="exampleFormControlSelect1">Email</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="email" name="email" id="inputEmail4" placeholder="email.e@mail.com" required/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label className="text-left f_600 w_color mt-lg-0 mt-3 " htmlFor="exampleFormControlSelect1">{t('form_input_company')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="text" name="company" id="company"  placeholder={t('form_placeholder_company')} required/>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <label className="text-left f_600 w_color mt-lg-0 mt-3 " htmlFor="exampleFormControlSelect1">{t('form_input_country')}</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control input" type="text" name="location" id="location"  placeholder={t('form_placeholder_country')} required/>
                                </div>
                            </div>                              
                            <div className="col-lg-12 mt-5 ">
                                <label className="text-left f_600 w_color mt-lg-0 mt-3 " htmlFor="exampleFormControlSelect1">{t('form_message')}</label>
                                <div className="form-group text-left mt-3">
                                    <textarea className="form-control input"  name="message" id="message" cols="30" rows="10" placeholder={t('form_placeholder_message')} required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="form-check d-flex align-items-center mt-5">
                                    <input className="form-check-input position-static me-3" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." required/>                        
                                    <label className="pl-2 w_color mt-lg-0 mt-3 form-check-label" htmlFor="gridCheck">        
                                        {t('form_label_policy')} <a href="@/assets/documents/Tratamiento_de_Datos_Dreamcode.pdf" className='m_color' download="Tratamiento_de_Datos_Dreamcode.pdf">{t('form_policy')}</a>
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3 form-check ">
                                <ReCAPTCHA
                                    sitekey={`${RECAPTCHA_SITEKEY}`}
                                    size="invisible"
                                    onChange={onChange}
                                    />
                            </div> 
                            <div className="col-lg-6 mt-4">
                                <button onClick={handleClick} type="submit" className='border-0 text-dark -bg-cian f-lg-18 f_600 rounded-pill px-4 py-3 align-items-lg-end mt-5 align-items-center' >
                                    <span>{t('form_btn')}</span>
                                </button>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>
        </ContainerCircule>

    </ContainerSection>
  )
}

export default Form;