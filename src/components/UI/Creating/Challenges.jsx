import React from 'react';
import style from './recicly.module.css';
import { FaArrowUpRightDots, FaBuildingFlag, FaObjectUngroup } from "react-icons/fa6";
import { HiMiniCubeTransparent } from "react-icons/hi2";
import { MdSupportAgent } from "react-icons/md";
import { SiSpringsecurity } from "react-icons/si";
import { RiApps2AddFill } from "react-icons/ri";
import { VscServerProcess } from "react-icons/vsc";
import { BsPersonFillDown } from "react-icons/bs";
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
                    icon={<FaBuildingFlag size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<HiMiniCubeTransparent size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<BsPersonFillDown size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaObjectUngroup size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<FaArrowUpRightDots size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<MdSupportAgent size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<SiSpringsecurity size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<RiApps2AddFill size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
                <ChallengeCards 
                    icon={<VscServerProcess size={28} color='#3BF7E4' />}
                    description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                />
            </div>          
        </div>
    </ContainerSection>
  )
}

