import React from 'react';
import style from './circuleList.module.css';
import ContainerSection from '../Containers/ContainerSection';

export default function CirculeList( { title , dataList, className}) {
  return (
        <ContainerSection>
            <div className={`${style.circuleList} ${className}`}>
                <div className='my-5'>
                    <h2 className='text-center f-lg-40 f-sm-30 m_color f_800'>{title}</h2>
                </div>
                <div className="container my-2 px-lg-5 ">
                    <div className='row justify-content-center mx-lg-5'>                       
                        {
                            dataList.map((item, i) => (
                                <CirculeListItem 
                                    key={i}
                                    text={item}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </ContainerSection>
  )
}

function CirculeListItem ({ text }) {

    return (  
        <div className={`col-lg-auto ${style.col_bf_6} `}>
            <div className={`${style.benefits_item} `}>
                <div className='d-flex align-items-center justify-content-center h-auto position-relative w-auto'>
                    <h3 className="m-0 f-lg-18 f-sm-12 f_600 p_color">{text}</h3>
                </div>
            </div>
      </div>
    )
}