"use client"
import React from 'react';
import style from './recicly.module.css';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule';
import Image from 'next/image';
import { BoxContainer , BoxChild } from '@/components/UI/Common/Common';
import ContainerSection from '@/components/UI/Containers/ContainerSection'

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

export default function TalentBox({ data , talent}) {

  const firstHalf = data.slice(0, 3); 
  const secondHalf = data.slice(3);    


  return (
    <ContainerSection>
      <ContainerCircule className={style.talent}>
        <BoxContainer className={style.talent_box}>
            <BoxChild>
                <h2 className="f-lg-25 m_color me-3 z-indez-9 position-relative">{talent} 
                <span className="f_700"> TECH</span></h2>       
            </BoxChild>
            {
              firstHalf.map((talent, index) => (
              <TalentBoxChild 
                key={index} 
                image={talent.image} 
                description={talent.description} 
              />
              ))
            }
        </BoxContainer>
        <BoxContainer className={style.talent_box}>         
          {
            secondHalf.map((talent, index) => (
              <TalentBoxChild 
                key={index} 
                image={talent.image} 
                description={talent.description} 
              />
            ))
          }
        </BoxContainer>
      </ContainerCircule>
    </ContainerSection>
  )
}

