import React from 'react'
import ContainerSection from '../UI/Containers/ContainerSection';
import { BiTargetLock } from "react-icons/bi";
import { MdOnlinePrediction } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


function InfoJob ({ modality, experts, rol }) {
      
    const { t } = useTranslation('profile');
    const behaviors = t('behaviors', { returnObjects: true }) ;

  return (
        <ContainerSection>
            <div>
              <h3 className='m_color f_800 f-lg-30 f-sm-20'>
                {
                  modality === true
                  ? <BiTargetLock className='f_800' size={40}/> 
                  : <MdOnlinePrediction className='f_800' size={40}/>
                }
                  {modality === true ?  t('remote') : ' Presencial'}
              </h3>
              <p className='p_color f-lg-18 mt-4'>
                {t('introduction')} 
              </p>
            </div>

            <div>
              <div className='row mt-5'>
                  <div className='col-lg-7 mt-lg-0 mt-4'>
                    <div className=' -bg-secondary rounded-4 p-5 m-2'>
                      <h4 className='w_color f-lg-25'>{t('how_you_can')}</h4>
                      <ul className='my-4'>
                        {
                          Array.isArray(behaviors) &&
                          behaviors.map((item, i) =>{
                            return (
                              <li key={i} className='p_color f-lg-15'>{item}</li>
                            )
                          })
                        }
                      </ul>
                      <h4 className='w_color f-lg-20'>{t('title_experts')}</h4>
                      <ul className='list-unstyled '>
                      {
                        experts.map((item, i) =>{
                          return (
                            <li key={i} className='d-flex align-items-center p_color f-lg-15 ms-3'><FaCode className='me-2'/>{item}</li>
                          )
                        })
                      }   
                      </ul>
                    </div>
                  </div>
                  <div className='col-lg-5 mt-lg-0 mt-4'>
                    <h4 className='w_color f_800 f-lg-18 mb-4'>{t('title_rol')}</h4>
                    <ul className='p_color'>
                      {
                        rol.map((item, i) =>{
                          return (
                            <li key={i} className='d-flex align-items-center p_color f-lg-15'>- {item}</li>
                          )
                        })
                      }
                    </ul>
                  </div>
              </div>
            </div>

        </ContainerSection>
  )
}

export default InfoJob;