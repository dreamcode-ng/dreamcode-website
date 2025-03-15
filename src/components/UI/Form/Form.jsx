import React from 'react';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule'
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import style from './form.module.css';


function Form () {
  return (
    <ContainerSection >
        <div className='py-5'>
            <h2 className='m_color f-lg-40 text-center'>
                Conectamos tus ideas con el futuro
            </h2>
            <p className='p_color f-lg-20 text-center mb-5'>¿Qué proyecto tienes en mente?</p>
        </div>
        <ContainerCircule className={style.form}>
            <div className="row justify-content-center">
                <div className="col-lg-12 col-sm-12 col-md-12">    
                    <form className="needs-validation was-validated" method="post" id="contactForm" >
                        <div className="row">
                            <div className="col-lg-3">
                                <label className="text-left f_600 w_color " htmlFor="exampleFormControlSelect1">Nombre</label>
                                <div className="form-group text-left mt-3">
                                    <input className="form-control  input" type="text" name="nombre" id="inputNombre" placeholder="Nombre y apellido" required/>
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
                                    <textarea className="form-control input"  name="message" id="message" cols="30" rows="10" placeholder=" Quiero crear una app web..." required></textarea>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="form-check d-flex align-items-center mt-5">
                                    <input className="form-check-input position-static me-3" type="checkbox" id="blankCheckbox" value="option1" aria-label="..." required/>                        
                                    <label className="pl-2 w_color form-check-label" htmlFor="gridCheck">        
                                            I have read and accept the <a href="@/assets/documents/Tratamiento_de_Datos_Dreamcode.pdf" className='m_color' download="Tratamiento_de_Datos_Dreamcode.pdf">Privacy policy </a>
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-4">
                                <ButtonIcon className="align-items-lg-end mt-5 align-items-center" link="/blog" text="Empieza ahora  →" />
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