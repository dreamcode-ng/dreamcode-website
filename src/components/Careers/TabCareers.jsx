"use client";

import { useEffect, useState } from "react";
import style from './careers.module.css';
import ContainerSection from "../UI/Containers/ContainerSection";

export default function TabCareers() {

    const [ jobs , setJob ] = useState(true)
    //setJob(!hasJobs)}

  return (
    <ContainerSection>
        { jobs ? <Este /> : <Oeste />}
        <button onClick={() => setJob(!jobs)}>Toggle</button>

        
    </ContainerSection>
  )
}

function Este() {
    return (
        <div>Tenemos</div>
    )
}

function Oeste() {
    return(
        <div>No tenemo</div>
    )
}

