"use client";
import { useEffect, useState } from "react";
import style from './careers.module.css';
import CardJobs from './Card';
import FormCareers from '@/components/UI/FormCareers/FormCareers';
import ContainerSection from "../UI/Containers/ContainerSection";

export default function TabCareers({ title, subtitle}) {

    const [ jobs , setJob ] = useState(false)

  return (
    <ContainerSection>
        <div className='d-flex flex-wrap justify-content-center mx-lg-0 mx-1'>
          <h1 className='w_color f_700 f-lg-70 f-sm-40 text-center mx-lg-0 mx-5'>{title}</h1>
          <p className='w-100 w-lg-75 text-center f-lg-20 f-sm-18 f_500 p_color'>{subtitle}</p>
        </div>
        <div className='pt-3 mt-5'>
          { jobs ? 
          <CardJobs /> : <FormCareers />}
          <br></br>
          {/* <button onClick={() => setJob(!jobs)}>{ jobs ? "Si no hay ofertas" : "Si si hay ofertas"}</button> */}
        </div>

        
    </ContainerSection>
  )
}




