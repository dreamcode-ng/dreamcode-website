import React from 'react';
import style from './iconList.module.css';
import ContainerSection from '../../UI/Containers/ContainerSection';
import { FaReact, FaAngular } from "react-icons/fa";

export default function CirculeList( { title , dataList}) {
  return (
        <ContainerSection>
            <div className={`${style.circuleList}`}>
                <div className='my-5'>
                    <h2 className='text-center f-lg-40 m_color'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center gap-4'>                       
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                        <CirculeListItem />
                    </div>
                </div>
            </div>
        </ContainerSection>
  )
}

function CirculeListItem () {

    return (  
        <div className='col-lg-auto col'>
            <div className={`${style.benefits_item} `}>
                <FaReact color='#999' size={70}/>
            </div>
      </div>
    )
}