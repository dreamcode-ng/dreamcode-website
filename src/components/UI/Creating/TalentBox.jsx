import React from 'react';
import style from './recicly.module.css';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule';
import Image from 'next/image';
import { BoxContainer , BoxChild } from '@/components/UI/Common/Common';
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import { FaPeopleArrows } from "react-icons/fa";

function TalentBoxChild ({ image , description }) {

  
  return (
    <BoxChild>
        <div className={`pb-3`}>
          <Image src={`/img/staff-augmentation/${image}.svg`} width={37} height={36} loading='lazy' alt="icon" />
        </div>
      <p className="text-start f-lg-15 p_color">{description}</p>
    </BoxChild>
  )
}

export default function TalentBox() {
  return (
    <ContainerSection>
      <ContainerCircule className={style.talent}>
        <BoxContainer className={style.talent_box}>
            <BoxChild>
                <h2 className="f-lg-25 m_color">Nuestro talento 
                <span className="f_700"><br></br> TECH</span></h2>       
            </BoxChild>
            <TalentBoxChild 
              image="talent-valor"
              description="Es ágil en la realización de proyectos" />
            <TalentBoxChild 
              image="talent-valor"
              description="Es ágil en la realización de proyectos" />
            <TalentBoxChild 
              image="talent-valor"
              description="Es ágil en la realización de proyectos" />
        </BoxContainer>
        <BoxContainer className={style.talent_box}>         
          <TalentBoxChild 
            image="talent-valor"
            description="Es ágil en la realización de proyectos" />
          <TalentBoxChild 
            image="talent-valor"
            description="Es ágil en la realización de proyectos" />
          <TalentBoxChild 
            image="talent-valor"
            description="Es ágil en la realización de proyectos" />
          <TalentBoxChild 
            image="talent-valor"
            description="Es ágil en la realización de proyectos" />
        </BoxContainer>
      </ContainerCircule>
    </ContainerSection>
  )
}

