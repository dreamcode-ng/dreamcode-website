import React from 'react';
import { useTranslation } from 'next-i18next';


function Wave({ className , text , icon, icon_class}) {

  const { t } = useTranslation('home');
  

  return (
    <div className='d-flex flex-column align-items-center text-center'>
      <div className={`d-flex align-items-center ${className} text-white rounded-pill px-2 py-2 shadow-lg`} style={{ maxWidth: "300px" }}>
          <p className="ms-2 me-3 f-lg-14 fw-bold mb-0">
              {text}
          </p>
          <div className={`d-flex align-items-center justify-content-center rounded-circle ${icon_class}`} style={{ width: "44px" , height: "44px"}}>
              {icon}
          </div>
      </div>    
    </div>
  )
}

export default Wave;