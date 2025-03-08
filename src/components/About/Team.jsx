import React from 'react';
import ContainerSection from '../UI/Containers/ContainerSection';
import Image from 'next/image';
import Wave from '../UI/Reusable/Wave';
import styles from "./about.module.css";
import { FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
      <ContainerSection>
        <div className={`${styles.team_row} `}>

            <TeamItem />
            <TeamItem />
            <TeamItem />
            <TeamItem />
            <TeamItem />
            <TeamItem />
            <TeamItem />
        </div>

      </ContainerSection>
  )
}

function TeamItem ( { name , position , image, link}) {
    return (
        <div className=' d-flex align-items-center flex-column p-3 '>
          <Image src="/img/about/team/Horacio.png" width={1920} height={100} alt='' />
          <div className='d-flex flex-column gap-3 w-100'>
            <div className="d-flex flex-column align-items-center gap-2">
              <h3 className="text-center f-ls-20 f_600 w_color">Francisco Chaves</h3>
              <p className="text-center f-ls-18 f_500 p_color">Director de Ingeniería, Socio</p>
            </div>
            <Wave 
              className=" -bg-secondary"
              text="Conectemos 👋"
              icon_class="-bg-cian"
              icon={<FaLinkedin />} />
          </div>
        </div>
    )
}