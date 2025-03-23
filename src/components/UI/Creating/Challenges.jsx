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
  
  const iconMap = {
    FaBuildingFlag,
    HiMiniCubeTransparent,
    BsPersonFillDown,
    FaObjectUngroup,
    FaArrowUpRightDots,
    MdSupportAgent,
    SiSpringsecurity,
    RiApps2AddFill,
    VscServerProcess
  };
export default function Challenges({ title, data}) {
  return (
    <ContainerSection>
        <h2 className="text-center f-lg-40 w_color mb-5">{title}</h2>
        <div className={`${style.challenge} position-relative box_shadow`}>
            <div className={`${style.challenge_row} `}>
                {
                data.map((challenge, index) => {
                    const IconComponent = iconMap[challenge.icon]; // Obtener el icono correcto

                    return (
                    <ChallengeCards
                        key={index}
                        icon={<IconComponent size={28} color="#3BF7E4" />}
                        description={challenge.description}
                    />
                    );
                })}
            </div>          
        </div>
    </ContainerSection>
  )
}

