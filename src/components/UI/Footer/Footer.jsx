import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './footer.module.css';
import Widget from './Widget';
import { FaLinkedin , FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { withTranslation } from 'react-i18next';

function Footer({ t } ) {

    return (
      <>
        <footer className={`${style.footer_area}`}>
          {/* <p>{t('locale')}</p>      */}
          <div className={`container container-dc ${style.footer_top}`}>
              <div className="container">
                  <div className="row gap-5">   
                      <div className="col-lg-3 col-sm-6">
                          <div className={`${style.footer_widget} `} >
                              <Link className="" href={'/'}>
                                  <Image src="/img/logo-blue.png" title="Logo Empresa de Software DreamCode" alt="Logo DreamCode Software" width={170} height={28}/>
                              </Link>
                              <div className='d-flex mt-5 gap-3'>
                                <Link href="https://clutch.co/profile/dreamcode" target="_blank">
                                  <Image src="/img/clients/clutch.svg" width={55} height={17} />
                                </Link>   
                                <Link href="https://www.topdevelopers.co/profile/dreamcode" target="_blank">
                                  <Image src="/img/clients/top-developers.svg" width={152} height={17} />
                                </Link>
                              </div>
                          </div>
                      </div>
                      
                      <div className='col-lg-3 col-sm-6'>
                        <h3 className='f_700 f-lg-18 m_color'>Info</h3>
                        <div className={`${style.footer_widget} mt_20 f_600`}>
                            <p className="f-lg-15 mb-3"><span className='m_color'>{t('email')}:</span> <Link href="mailto:info@dreamcodesoft.com"  className="f_500">info@dreamcodesoft.com</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>{t('phone')}:</span> <Link href="tel:573152206211"  className="f_500">+57 315 220 62 11</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>United States, Miami</span><br></br><Link href="https://maps.app.goo.gl/NBWER2zyyWD8rXfB7" target="_blank" rel="noopener noreferrer" className="f_400"> 8004 NW Calle 154 STE 646, <br></br>Hialeah, FL 33016</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>Colombia, Cali</span><br></br><Link href="https://goo.gl/maps/Ync42KoKat2ckRW86" target="_blank" rel="noopener noreferrer" className="f_400"> Carrera 100 #16-321, <br></br>Edificio Jardín Central, Oficina 1202</Link></p>
                            <p className="f-lg-15 mb-3"><span className='m_color'>Colombia, Bogotá</span><br></br><Link href="https://maps.app.goo.gl/prTXytC9PeVvSKYM6" target="_blank" rel="noopener noreferrer" className="f_400"> Dg. 25g #95a - 85, <br></br>Centro Empresarial Buró 25, Oficina 112</Link></p>
                        </div>
                      </div>                    
                      <Widget                                 
                        titleWidget={t('about')} >
                            <li><Link href={'/great-place-to-work'}>GPTW</Link></li>
                            <li><Link href={'/contact'}>{t('contact')}</Link></li>
                            <li><a href='/documents/Tratamiento_de_Datos_Dreamcode.pdf' target="_blank" rel="noopener noreferrer">{t('privacy_policy')}</a></li>
                      </Widget>                     
                      <Widget                                 
                        titleWidget={t('careers')} >                          
                            <li><Link href={'/dreamcoders'}>{t('dreamcoders')}</Link></li>
                            <li><Link href={'/careers'}>{t('job')}</Link></li>
                      </Widget>
                  </div>
              </div>
          </div>
        </footer>
        <div className={`container container-dc ${style.footer_bottom} py-4`}>
          <div className="row justify-content-center ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <p className="mb-0 f_400 p_color text-lg-start text-center mt-lg-0 mb-3 f-lg-15">Copyright © {new Date().getFullYear()} DreamCode Inc -<strong className="f_500">  All rights reserved.</strong> </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                  <ul className={`m-0 text-center ${style.social_icon} mt-lg-0 mt-3 list-inline d-flex flex-row justify-content-lg-end justify-content-center`}>
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


  export default withTranslation('layout')(Footer);



  
  
