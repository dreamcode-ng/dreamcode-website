import React from 'react';
import ContainerSection from '../UI/Containers/ContainerSection';
import Image from 'next/image';
import Wave from '../UI/Reusable/Wave';
import styles from "./about.module.css";
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

export default function Team() {

  const { t } = useTranslation('about');

  
  return (
      <ContainerSection>
        <h2 className='m_color text-center display-3 f_700 pb-5'>{t('team_title')}</h2>
        <div className={`${styles.team_row} `}>
            <TeamItem name="Horacio Borrero" position={t('team_horacio')} image="Horacio" link="https://www.linkedin.com/in/fchaves-dreamcode/" />
            <TeamItem name="Francisco Chaves" position={t('team_francisco')} image="Francisco" link="https://www.linkedin.com/in/fchaves-dreamcode/" />
            <TeamItem name="Jonathan Ortiz" position={t('team_jonathan')} image="Jonathan" link="https://www.linkedin.com/in/jorge-jonathan-ortiz-velez-95878b67/" />
            <TeamItem name="Leonardo Vargas" position={t('team_leonardo')} image="Leonardo" link="https://www.linkedin.com/in/leonardo-torres-7a317851/" />
            <TeamItem name="Eliana Zapata" position={t('team_eliana')} image="Eliana" link="https://www.linkedin.com/in/eliana-zapata-0b763450/" />
            <TeamItem name="Vivian Bobadilla" position={t('team_vivian')} image="Vivian" link="https://www.linkedin.com/in/vivian-bobadilla-b0296989/" />            
            <TeamItem name="Rubén Garzón" position={t('team_ruben')} image="Ruben" link="https://www.linkedin.com/in/rub%C3%A9n-dar%C3%ADo-garz%C3%B3n-cabezas-94153b27/" />
        </div>
      </ContainerSection>
  )
}

function TeamItem ( { name , position , image, link}) {
    return (
        <div className=' d-flex align-items-center flex-column p-3 img-fluid'>
          <Image src={`/img/about/team/${image}.png`} width={250} height={337} alt='' />
          <div className='d-flex flex-column gap-3 w-100'>
            <div className="d-flex flex-column align-items-center gap-2">
              <h3 className="text-center f-ls-20 f_600 w_color">{name}</h3>
              <p className="text-center f-ls-18 f_500 p_color">{position}</p>
            </div>
            <Wave 
              className=" -bg-secondary"
              link={link}
              text="Conectemos 👋"
              icon_class="-bg-cian"
              icon={<FaLinkedin />} />
          </div>
        </div>
    )
}