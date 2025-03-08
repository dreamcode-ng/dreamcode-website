import React from 'react';
import style from './recicly.module.css';
import { FaArrowUpRightDots } from "react-icons/fa6";
import ContainerSection from '@/components/UI/Containers/ContainerSection'



  function ChallengeCards( { icon,  description}) {
    return (
      <div className={`${style.challenge_box} gap-3 d-flex justify-content-around position-relative`}>
            <div className={`border-gradient rounded-circle`}>
                <div className={`rounded-circle m-2`}>
                    <div className='p-2'>{icon}</div>
                </div>
            </div>
            <p className="text-center f-lg-18 p_color">{description}</p>
      </div>
    )
  }
export default function Challenges() {
  return (
    <ContainerSection>
        <div className={`${style.challenge} position-relative box_shadow`}>
            <div className={`${style.challenge_row} `}>
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
            </div>          
        </div>
    </ContainerSection>
  )
}

