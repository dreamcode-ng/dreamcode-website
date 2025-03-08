import React from 'react'
import ContainerCircule from '../UI/Containers/ContainersCircule'
import style from './home.module.css';
import stilos from '@/components/UI/Buttons/buttons.module.css';
import Link from 'next/link';

//import { d } from '../Buttons/Buttons';

function Form() {
  return (
    <div className="container-dc container position-relative py-5">
        <h2 className='m_color f-lg-40 text-center'>
            Conectamos tus ideas con el futuro
        </h2>
        <p className='p_c<olor f-lg-20 text-start mb-5'>¿Qué proyecto tienes en mente?</p>
        <ContainerCircule className={style.form}>
        <div className="row justify-content-center">
                    <div className="col-lg-12 col-sm-12 col-md-12">    
                        <form className="needs-validation was-validated" method="post" id="contactForm" >
                            <label>
                                <h2 className="f_p m_color f--size-30 f_600 mb-4 l_height_p mb_40">Titulo</h2>
                            </label>
                            <div className="row">
                                <div className="col-lg-3">
                                    <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">Nombre</label>
                                    <div className="form-group text-left mt-3">
                                        <input className="form-control  input" type="nombre" name="nombre" id="inputNombre" placeholder="Nombre y apellido" required/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">Email</label>
                                    <div className="form-group text-left mt-3">
                                        <input className="form-control  input" type="email" name="email" id="inputEmail4" placeholder="correo.e@mail.com" required/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">Compañia</label>
                                    <div className="form-group text-left mt-3">
                                        <input className="form-control  input" type="text" name="company" id="company"  placeholder="Nombre de la compañía" required/>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">País</label>
                                    <div className="form-group text-left mt-3">
                                        <input className="form-control input" type="text" name="location" id="location"  placeholder="Nombre del país" required/>
                                    </div>
                                </div>                              
                                <div className="col-lg-12 mt-5 ">
                                    <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">¿Qué objetivo quieres alcanzar?</label>
                                    <div className="form-group text-left mt-3">
                                        <textarea className="form-control input"  name="message" id="message" cols="30" rows="10" placeholder="Quiero crear una app web..." required></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-5">
                                    <div className="form-check text-start mb-3">
                                        <input className="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." required/>                        
                                        <label className="pl-2 w_color form-check-label" htmlFor="gridCheck">        
                                                I have read and accept the <a href="@/assets/documents/Tratamiento_de_Datos_Dreamcode.pdf" className='m_color' download="Tratamiento_de_Datos_Dreamcode.pdf">Privacy policy </a>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-6 text-end">
                                    <Link href="/" className={`${stilos.btnIcon}  btn-lg`}>text</Link>
                                </div>
                            </div>
                            {/* <div className="mb-3 form-check ">
                                <ReCAPTCHA
                                    sitekey={`${RECAPTCHA_SITEKEY}`}
                                    size="invisible"
                                    onChange={onChange}
                                    />
                            </div>     
                            <div className='position-relative' id="infoContacts">    
                                <button type="submit" className='f_p f_500 bg_magenta' >
                                    <div className="svg-wrapper-1">
                                        <div className="svg-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                        </svg>
                                        </div>
                                    </div>
                                    <span>Send</span>
                                </button>
                            </div>
                            */}
                            </form>
                    </div>
                </div>
        </ContainerCircule>

    </div>
  )
}

export default Form