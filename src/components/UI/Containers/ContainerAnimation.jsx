import { StarIcon } from '@/assets/iconos/svgCall';
import React from 'react';
import AnimationUse from '@/assets/animations/AnimationUse';
import style from '@/components/UI/Containers/containers.module.css';
import { ButtonIcon } from '../Buttons/Buttons';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function ContainerAnimation ({ title, text, animation}) {
    return (
        <ContainerSection>   
            <div className={`${style.animation_container} position-relative py-5 text-center`}>
                <div className="d-flex flex-column align-items-center justify-content-center gap-3 ">
                    <div className="row flex-sm-column-reverse flex-lg-row">
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div className="text-start mb-3 mt-5">
                                <StarIcon />
                                <h2 className='mt-3 w_color text-start'>
                                    {title}
                                </h2>
                                <p className="f-lg-18 text-start p_color">
                                    {text}
                                </p>
                                <ButtonIcon className="align-items-start mt-5" link="/blog" text="Contáctanos →" />
                            </div>
                        </div>
                        <div className={`col-12 col-md-6 ${style.animation_img}`}>
                            <div className="h-100 d-flex align-items-center justify-content-center">
                                <AnimationUse animationName={animation} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerSection>

    )
  }

export default ContainerAnimation;