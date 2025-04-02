import React from 'react'
import ContainerSection from '../UI/Containers/ContainerSection';
import { BiTargetLock } from "react-icons/bi";
import { MdOnlinePrediction } from "react-icons/md";

function InfoJob ({ modality }) {


    let icon = ""
    let text = ""

  return (
        <ContainerSection>
            <div>
              <h3 className='m_color f_800 f-lg-30'>
                {
                  {modality} == "Remote" 
                  ? <BiTargetLock className='f_800 f-lg-30' /> 
                  : <MdOnlinePrediction className='f_800 f-lg-30' />
                  }
                  {modality}
              </h3>
            </div>

        </ContainerSection>
  )
}

export default InfoJob;