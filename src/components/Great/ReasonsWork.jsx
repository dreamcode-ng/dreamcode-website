import React from 'react'
import ContainerSection from '../UI/Containers/ContainerSection';
import styles from './greatPlace.module.css'
import Image from 'next/image';
import ContainerCircule from '../UI/Containers/ContainersCircule';
import { useTranslation } from 'react-i18next';


export default function ReasonsWork() {

  const { t } = useTranslation('gptw');

  
  return (
    
        <ContainerSection>
          <div className="w_color position-relative">
            <div className={`${styles.first_row} row position-relative mb-5`}>
              <div className="p-0 col-md-5">   
                <ContainerCircule className={styles.imageBox}>
                  <Image
                    src="/img/great-place/cultura-priorizada.jpg"
                    width={600}
                    height={500}
                    alt="Office"
                    className="img-fluid position-relative z-index-9"
                  />
                </ContainerCircule>
              </div>
              <div className="p-0 col-md-7 d-flex align-items-center">
                <div className={styles.content}>
                    <h3 className='m_color mb-4'>{t('culture_title')}</h3>
                    <p className="f_500 f-lg-18">{t('culture_description')}</p>
                </div>
              </div>
            </div>
            <div className={`${styles.second_row} row position-relative mt-5`}>
              <div className="p-0 col-md-7 d-flex align-items-center">
                <div className={styles.content}>
                    <h3 className='m_color mb-4'>{t('working_title')}</h3>
                    <p className="f_500 f-lg-18">{t('working_description')}</p>
                </div>
              </div>
              <div className="p-0 col-md-5">
                <ContainerCircule className={`${styles.imageBox}`}>
                <Image
                    src="/img/great-place/motivo-orgullo.jpg"
                    width={600}
                    height={500}
                    alt="Office"
                    className="img-fluid position-relative z-index-9"
                  />
                </ContainerCircule>
              </div>
            </div>
            <div className={`${styles.first_row} row position-relative mb-5`}>
              <div className="p-0 col-md-5">   
                <ContainerCircule className={styles.imageBox}>
                  <Image
                    src="/img/great-place/reconocer-talento.jpg"
                    width={600}
                    height={500}
                    alt="Office"
                    className="img-fluid position-relative z-index-9"
                  />
                </ContainerCircule>
              </div>
              <div className="p-0 col-md-7 d-flex align-items-center">
                <div className={styles.content}>
                  <h3 className='m_color mb-4'>{t('recognizing_title')}</h3>
                  <p className="f_500 f-lg-18">{t('recognizing_description')}</p>
                </div>
              </div>
            </div>
            <div className={`${styles.second_row} row position-relative mt-5`}>
              <div className="p-0 col-md-7 d-flex align-items-center">
                <div className={styles.content}>
                  <h3 className='m_color mb-4'>{t('leadership_title')}</h3>
                  <p className="f_500 f-lg-18">{t('leadership_description')}</p>
                </div>
              </div>
              <div className="p-0 col-md-5">
                <ContainerCircule className={`${styles.imageBox}`}>
                <Image
                    src="/img/great-place/leaders.jpg"
                    width={600}
                    height={500}
                    alt="Office"
                    className="img-fluid position-relative z-index-9"
                  />
                </ContainerCircule>
              </div>
            </div>
            <div className={`${styles.first_row} row position-relative mb-5`}>
              <div className="p-0 col-md-5">   
                <ContainerCircule className={styles.imageBox}>
                  <Image
                    src="/img/great-place/entorno-formidable.jpg"
                    width={600}
                    height={500}
                    alt="Office"
                    className="img-fluid position-relative z-index-9"
                  />
                </ContainerCircule>
              </div>
              <div className="p-0 col-md-7 d-flex align-items-center">
                <div className={styles.content}>
                  <h3 className='m_color mb-4'>{t('environment_title')}</h3>
                  <p className="f_500 f-lg-18">{t('environment_description')}</p>
                </div>
              </div>
            </div>
            <div className={`${styles.second_row} row position-relative mt-5`}>
              <div className="p-0 col-md-7 d-flex align-items-center">
                <div className={styles.content}>
                  <h3 className='m_color mb-4'>{t('collaboration_title')}</h3>
                  <p className="f_500 f-lg-18">{t('collaboration_description')}</p>
                </div>
              </div>
              <div className="p-0 col-md-5">
                <ContainerCircule className={`${styles.imageBox}`}>
                <Image
                    src="/img/great-place/colaboración-equipo.jpg"
                    width={600}
                    height={500}
                    alt="Office"
                    className="img-fluid position-relative z-index-9"
                  />
                </ContainerCircule>
              </div>
            </div>
          </div>
        </ContainerSection>
  )
}

function ReaasonsItem () {
    
}