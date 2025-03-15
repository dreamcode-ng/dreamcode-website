"use client";
import listJobsEn from '../../assets/jobs/enJobs.json';
import listJobsEs from '../../assets/jobs/esJobs.json';
import { useEffect, useState } from "react";
import style from './careers.module.css';
import CardJobs from './Card';
import Form from '@/components/UI/Form/Form';
import ContainerSection from "../UI/Containers/ContainerSection";

export default function TabCareers() {

    const [ jobs , setJob ] = useState(true)
    //setJob(!hasJobs)}

  return (
    <ContainerSection>
        { jobs ? <CardJobs /> : <Form />}
        <br></br>
        <button onClick={() => setJob(!jobs)}>Si no hay ofertas</button>

        
    </ContainerSection>
  )
}




