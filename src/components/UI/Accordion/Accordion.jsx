"use client";
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey } from '@mui/material/colors';
import style from './accordion.module.css';
import ContainerSection from '../Containers/ContainerSection';

 const AccordionChild = ({ title , description }) => {
  return (
            <Accordion className={`${style.accordion} -bg-primary`}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={{ color: grey [50] }} />}
                className={`accordionSummary ${style.summary}`}
                aria-controls="panel1-content"
                id="panel1-header">
                <h3 className='f-lg-20 mb-0 w_color'>{title}</h3>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
                <p>{description}</p>
            </AccordionDetails>
            </Accordion>
  )
}

export const AccordionSection = ( { title, items }) => {
    return (
        <ContainerSection > 
            <div className="d-flex justify-content-center">
                <div className='col-lg-6 col-sm-12'>
                    <h2 className='text-center w_color f-lg-40 f-sm-25 mb-5'>{title}</h2>
                    {
                        items.map((item, index) => (
                            <AccordionChild key={index} title={item.title} description={item.description} />
                        ))
                    }
                </div>
            </div>
        </ContainerSection>
    )
}
