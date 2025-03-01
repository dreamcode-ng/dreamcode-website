import React from 'react';
import Link from 'next/link';
import AnimationUse from '@/assets/animations/AnimationUse';
import style from '@/components/Home/home.module.css';
import { ButtonIcon } from '../Buttons/Buttons';

function TecnoAdapta() {
  return (
    <div className={`${style.tecno} position-relative py-5 text-center`}>
        <div className="d-flex flex-column align-items-center justify-content-center gap-3 ">
            <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="tecno-text text-start mb-3 mt-5">
                        <svg width="69" height="30" viewBox="0 0 69 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_822)">
                        <path d="M15 30.0165C23.2843 30.0165 30 23.3008 30 15.0165C30 6.73225 23.2843 0.0166016 15 0.0166016C6.71573 0.0166016 0 6.73225 0 15.0165C0 23.3008 6.71573 30.0165 15 30.0165Z" fill="#666666"/>
                        <path d="M0 45C8.28427 45 15 38.2843 15 30C15 21.7157 8.28427 15 0 15C-8.28427 15 -15 21.7157 -15 30C-15 38.2843 -8.28427 45 0 45Z" fill="#141414"/>
                        <path d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45Z" fill="#141414"/>
                        <path d="M0 15C8.28427 15 15 8.28427 15 0C15 -8.28427 8.28427 -15 0 -15C-8.28427 -15 -15 -8.28427 -15 0C-15 8.28427 -8.28427 15 0 15Z" fill="#141414"/>
                        <path d="M30 15C38.2843 15 45 8.28427 45 0C45 -8.28427 38.2843 -15 30 -15C21.7157 -15 15 -8.28427 15 0C15 8.28427 21.7157 15 30 15Z" fill="#141414"/>
                        </g>
                        <g clipPath="url(#clip1_1_822)">
                        <path d="M45 24.01C49.9706 24.01 54 19.9805 54 15.01C54 10.0394 49.9706 6.01001 45 6.01001C40.0294 6.01001 36 10.0394 36 15.01C36 19.9805 40.0294 24.01 45 24.01Z" fill="#333333"/>
                        <path d="M36 33C40.9706 33 45 28.9706 45 24C45 19.0294 40.9706 15 36 15C31.0294 15 27 19.0294 27 24C27 28.9706 31.0294 33 36 33Z" fill="#141414"/>
                        <path d="M54 33C58.9706 33 63 28.9706 63 24C63 19.0294 58.9706 15 54 15C49.0294 15 45 19.0294 45 24C45 28.9706 49.0294 33 54 33Z" fill="#141414"/>
                        <path d="M36 15C40.9706 15 45 10.9706 45 6C45 1.02944 40.9706 -3 36 -3C31.0294 -3 27 1.02944 27 6C27 10.9706 31.0294 15 36 15Z" fill="#141414"/>
                        <path d="M54 15C58.9706 15 63 10.9706 63 6C63 1.02944 58.9706 -3 54 -3C49.0294 -3 45 1.02944 45 6C45 10.9706 49.0294 15 54 15Z" fill="#141414"/>
                        </g>
                        <g clipPath="url(#clip2_1_822)">
                        <path d="M64.2 19.2047C66.5196 19.2047 68.4 17.3243 68.4 15.0047C68.4 12.6851 66.5196 10.8047 64.2 10.8047C61.8804 10.8047 60 12.6851 60 15.0047C60 17.3243 61.8804 19.2047 64.2 19.2047Z" fill="#333333"/>
                        <path d="M60.0008 23.4C62.3204 23.4 64.2008 21.5196 64.2008 19.2C64.2008 16.8804 62.3204 15 60.0008 15C57.6812 15 55.8008 16.8804 55.8008 19.2C55.8008 21.5196 57.6812 23.4 60.0008 23.4Z" fill="#141414"/>
                        <path d="M68.4012 23.4C70.7208 23.4 72.6012 21.5196 72.6012 19.2C72.6012 16.8804 70.7208 15 68.4012 15C66.0816 15 64.2012 16.8804 64.2012 19.2C64.2012 21.5196 66.0816 23.4 68.4012 23.4Z" fill="#141414"/>
                        <path d="M60.0008 15.0001C62.3204 15.0001 64.2008 13.1197 64.2008 10.8001C64.2008 8.4805 62.3204 6.6001 60.0008 6.6001C57.6812 6.6001 55.8008 8.4805 55.8008 10.8001C55.8008 13.1197 57.6812 15.0001 60.0008 15.0001Z" fill="#141414"/>
                        <path d="M68.4012 15.0001C70.7208 15.0001 72.6012 13.1197 72.6012 10.8001C72.6012 8.4805 70.7208 6.6001 68.4012 6.6001C66.0816 6.6001 64.2012 8.4805 64.2012 10.8001C64.2012 13.1197 66.0816 15.0001 68.4012 15.0001Z" fill="#141414"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_822">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        <clipPath id="clip1_1_822">
                        <rect width="18" height="18" fill="white" transform="translate(36 6)"/>
                        </clipPath>
                        <clipPath id="clip2_1_822">
                        <rect width="8.4" height="8.4" fill="white" transform="translate(60 10.8)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        <h2 className='mt-3 w_color text-start'>
                            <span className="fw-bold">Tecnología </span>
                            que se adapta a tus necesidades
                        </h2>
                        <p className="f-lg-18 text-start p_color">
                        En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.
                        </p>
                        <ButtonIcon link="/blog" text="Contáctanos →" />
                    </div>
                </div>
                <div className={`col-12 col-md-6 ${style.tecno_img}`}>
                    <div className=" d-flex align-items-center justify-content-center">
                        <AnimationUse animationName="cube" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TecnoAdapta;