import React from 'react';
import style from '@/components/Home/home.module.css';
import { useTranslation } from 'next-i18next';


function Wave() {

  const { t } = useTranslation('home');
  

  return (
    <div className={`d-flex align-items-center ${style.wave} -bg-dark text-white rounded-pill px-2 py-2 shadow-lg`} style={{ maxWidth: "300px" }}>
        <div className={`d-flex align-items-center justify-content-center rounded-circle -bg-primary ${style.wave_hand}`} >
            <span className="fs-3">👋</span>
        </div>
        <p className="ms-2 me-3 f-lg-14 fw-bold mb-0">
            {t('wave')}
        </p>
    </div>    
  )
}

export default Wave;