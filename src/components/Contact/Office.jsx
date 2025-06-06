"use client";
import React from 'react'
import ContainerSection from '../UI/Containers/ContainerSection';
import style from './conctact.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

export default function Office({ title}) {
  return (
    <ContainerSection>
        <div className='text-center'>
            <h2 className='m_color f-lg-40 f_600 mb-5'>{title}</h2>
        </div>
        <div className='row justify-content-center'>
            <OfficeItem 
                officeImg='sede-bogota'
                officeCity='Bogotá, Colombia'
                officeAddress='Dg. 25g #95a - 85, Centro Empresarial Buró 25, Oficina 112' />
            <OfficeItem 
                officeImg='sede-san-francisco'
                officeCity='Miami, United States'
                officeAddress=' 154th Street, Suite 646, Miami, FL8004 NW.' />
            <OfficeItem 
                officeImg='sede-cali'
                officeCity='Cali, Colombia'
                officeAddress='Carrera 100 #16-32 Centro de Negocios Jardin Central, Oficina 1202.' />
        </div>
    </ContainerSection>
  )
}

function OfficeItem({ officeImg , officeCity, officeAddress, officeNum}) {
    return (
      <div className='col-lg-4 col-md-4 col-sm-12'>
          <div className={`${style.office_content} m-lg-0 mt-4`} >
              <div className='office-img'>
              <Swiper 
                  grabCursor={true}        
                  pagination={{
                      dynamicBullets: true,
                      }}
                      modules={[Pagination]}
                  className="itemSwiper">
                  <SwiperSlide><img src={(`/img/contacts/${officeImg}-3.jpg`)} alt={`${officeCity} - DreamCode Software Colombia`} loading='lazy'/></SwiperSlide>
                  <SwiperSlide><img src={(`/img/contacts/${officeImg}-2.jpg`)} alt={`${officeCity} - DreamCode Software Colombia`} loading='lazy'/></SwiperSlide>
              </Swiper>
              </div>
              <div className='pt-4 px-4 gap-3 d-grid'>
                  <h3 className='w_color f_800'>{officeCity}</h3>
                  <p className='p_color mb-0 f-lg-15'><strong>{officeAddress}</strong></p>
              </div>
          </div>
      </div>
    )
}