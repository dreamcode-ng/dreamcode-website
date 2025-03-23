import React from 'react';
import style from './recicly.module.css';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function LineTimeCard( {title, number, description}) {
  return (
    <div className={`${style.content_box} flex-column gap-2 border-gradient d-flex position-relative`}>
        <div>
            <h3 className='f-lg-50 f_700 m_color'>{number}</h3>
            <h2 className='f-lg-20 w_color'>{title}</h2>
            <p className='f-lg-15 p_color'>{description}</p>
        </div>
    </div>
  )
}


export default function LineTime({ data}) {
  return (
    <ContainerSection>
        <div className={`${style.timeline} position-relative`}>
            <div className="container">
                <div className={style.timeline_row}>
                    <div className={`${style.timeline_box} d-flex gap-4`}>
                        {
                            data.map((item, index) => (
                                <LineTimeCard 
                                    key={index}
                                    number={item.number}
                                    title={item.title}
                                    description={item.description} />
                            ))
                        }                        
                    </div>
                </div>
            </div>
        
        </div>
    </ContainerSection>
  )
}

