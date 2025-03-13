import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey } from '@mui/material/colors';
import './accordion.module.css';
import ContainerSection from '../Containers/ContainerSection';

 const AccordionChild = ({ title , description }) => {
  return (
            <Accordion className="accordion">
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={{ color: grey [50] }} />}
                className="accordionSummary"
                aria-controls="panel1-content"
                id="panel1-header">
                <h3 className='f--size-20 w_color'>{title}</h3>
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
                <div className='col-lg-5 col-sm-12'>
                    <h2 className='text-center w_color f-lg-30'>{title}</h2>
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
