import React from 'react';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import style from './modernization.module.css'

function HowMigrate({ title, dataList}) {
  return (
    <ContainerSection>
        <div className='row d_flex align-items-center justify-content-center'>
            <div className='col-lg-8'>
                <ContainerCircule className="px-5 py_60">
                    <h2 className='f-lg-35 m_color mb_40 z-index'>{title}</h2>
                    <ul>
                        {
                            dataList.map((item, i) => {
                                return (
                                    <li key={i} className='w_color f-lg-18 mb-3 f_300'>{item}</li>
                                )
                            })
                        }
                    </ul>
                </ContainerCircule>
            </div>
        </div>    
    </ContainerSection>
  )
}

export default HowMigrate;