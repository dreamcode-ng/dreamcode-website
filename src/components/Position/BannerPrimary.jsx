import React from 'react';
import style from './position.module.css';
import ContainerSection from '../UI/Containers/ContainerSection';
import { IoRocketOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { FaMapMarkerAlt, FaPlus } from "react-icons/fa";


function BannerPrimary({ name , years , english , location, description}) {

  return (
    <ContainerSection>
        <div className={`${style.banner_primary} d-flex flex-column justify-content-center align-items-center`}>
            <h3 className='w_color text-center f-lg-20'>DreamCoder <IoRocketOutline  /></h3>
            <h1 className='w_color mt-3 text-center f-lg-90 f_800'>{name}</h1>
            <p className='w-50 mt-4 f-lg-18 text-center'>{description}</p>
            <div className='d-flex justify-content-between w-50 mt-4'>
              <p className='w_color f_800 f-lg-18'><FaPlus /> {years}</p>
              <p className='w_color f_800 f-lg-18'><MdLanguage /> {english}</p>
              <p className='w_color f_800 f-lg-18'><FaMapMarkerAlt /> {location}</p>
            </div>
        </div>
    </ContainerSection>
  )
}

export default BannerPrimary