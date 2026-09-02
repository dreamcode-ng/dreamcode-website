"use client";
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { grey } from '@mui/material/colors';
import style from './accordion.module.css';
import ContainerSection from '../Containers/ContainerSection';

 const AccordionChild = ({ title, description, question, list, answer }) => {
  const hasList = list && list.length > 0;
  const hasQuestion = question;
  const hasAnswer = answer;

  return (
    <Accordion className={style.accordion}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon sx={{ color: grey[50] }} />}
        className={`accordionSummary ${style.summary}`}
        aria-controls="panel1-content"
        id="panel1-header">
        <h3 className='f-lg-20 mb-0 w_color'><b>{title}</b></h3>
      </AccordionSummary>
      <AccordionDetails className='accordionDetails'>
        {description && (
          <p className="w_color">{description}</p>
        )}
        {hasQuestion && (
          <h4 className="w_color f-lg-20 mb-3"><b>{question}</b></h4>
        )}
        {hasList && (
          <ul className="w_color mb-3" style={{ listStyle: 'none', padding: 0 }}>
            {list.map((listItem, idx) => (
              <li key={idx} className="mb-2" style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#3BF7E4' }}>•</span>
                {listItem}
              </li>
            ))}
          </ul>
        )}
        {hasAnswer && (
          <p className="w_color"><b>{answer}</b></p>
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export const AccordionSection = ( { title, items }) => {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className='col-lg-10 col-md-12 col-sm-12 px-lg-5'>
                <h2 className='text-center w_color f-lg-40 f-sm-25 mb-5'>{title}</h2>
                <div className="accordion-area">
                    {
                        items.map((item, index) => (
                            <AccordionChild key={index} {...item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
