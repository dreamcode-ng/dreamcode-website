import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './footer.module.css'
import { URL_WHATSAPP } from '@/assets/Constants';
import { FaLinkedin , FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";

 


export default function Footer() {
    return (
      <>
        <footer className={`${style.footer_area}`}>
          <div className={`container container-dc ${style.footer_top}`}>
              <div className="container">
                  <div className="row gap-5">   
                      <div className="col-lg-3 col-sm-6">
                          <div className={`${style.footer_widget} `} >
                              <Link className="" href={'/'}>
                                  <Image src="/img/logo-blue.png" title="Logo Empresa de Software DreamCode" alt="Logo DreamCode Software" width={170} height={28}/>
                              </Link>
                              <div className='d-flex mt-5 gap-3'>
                                <Image src="/img/clients/clutch.svg" width={55} height={18} />
                                <Image src="/img/clients/top-developers.svg" width={155} height={19} />
                              </div>
                          </div>
                      </div>
                      
                      <div className='col-lg-3 col-sm-6'>
                        <h3 className='f_700 f-lg-18 m_color'>Info</h3>
                        <div className={`${style.footer_widget} mt_20 f_600`}>
                            <p className="f-lg-15 mb-3"><span className='m_color'>email:</span> <Link href="mailto:info@dreamcodesoft.com"  className="f_500">info@dreamcodesoft.com</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>phone:</span> <Link href="tel:573155790099"  className="f_500">+57 315 220 62 11</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'> United States, Miami</span><br></br><Link href="https://maps.app.goo.gl/NBWER2zyyWD8rXfB7" target="_blank" rel="noopener noreferrer" className="f_400"> 154th Street, Suite 646, <br></br>Miami, FL8004 NW</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>Colombia, Cali</span><br></br><Link href="https://goo.gl/maps/Ync42KoKat2ckRW86" target="_blank" rel="noopener noreferrer" className="f_400"> Carrera 100 #16-321, <br></br>footer.address</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>Colombia, Bogotá</span><br></br><Link href="https://maps.app.goo.gl/prTXytC9PeVvSKYM6" target="_blank" rel="noopener noreferrer" className="f_400"> Dg. 25g #95a - 85, <br></br>Centro Empresarial Buró 25, Oficina 112</Link></p>
                        </div>
                      </div>                    
                      <Widget                                 
                        titleWidget="About Us" >
                            <li>Solutions</li>
                            <li>Contact Us</li>
                            <li>Politicas de Privacidad</li>
                      </Widget>                     
                      <Widget                                 
                        titleWidget="Careers" >
                          
                            <li>Why DreamCode?</li>
                            <li>Job opportunities</li>
                      </Widget>
                  </div>
              </div>
          </div>
        </footer>
        <div className={`container container-dc ${style.footer_bottom} py-4`}>
          <div className="row justify-content-center ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="mb-0 f_400 p_color text-start f-lg-15">Copyright © {new Date().getFullYear()} DreamCode Inc -<strong className="f_500">  All rights reserved.</strong> </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <ul className={`m-0 text-center ${style.social_icon} list-inline d-flex flex-row justify-content-end`}>
                      <li className="social_iconos "><Link className="w_color p-3" href="https://www.linkedin.com/company/dreamcode-software/"><FaLinkedin /></Link></li>
                      <li className="social_iconos "><Link className="w_color p-3" href="https://www.facebook.com/dreamcodesoft"><FaFacebook /></Link></li>
                      <li className="social_iconos "><Link className="w_color p-3" href="https://www.instagram.com/dreamcode_software/"><FaInstagram /></Link></li>
                      <li className="social_iconos "><Link className="w_color p-3" href="https://www.youtube.com/channel/UC2cXutvW1QF4q9NhFHiUZPg"><FaYoutube /></Link></li>
                  </ul>  
              </div>
          </div>
        </div>
      </>
    );
  };



  function Widget({ children , titleWidget }) {
    return (
        <div className="col-lg-2 col-md-5">
          <div className={style.footer_widget}>
            <h3 className="m_color f_600 f-lg-20 mb_20">{titleWidget}</h3>
              <ul className="list-unstyled">
                { children}
              </ul>
          </div>
        </div>
    )
  }
  
  
