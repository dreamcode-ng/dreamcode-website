import React from 'react';


function Wave({ className , text , icon, icon_class, link}) {

  

  return (
    <div className='wave d-flex flex-column align-items-center text-center'>
      <a href={link} target="_blank">
        <div className={`content_wave d-flex align-items-center ${className} text-white rounded-pill px-2 py-2 shadow-lg`} >
            <p className="ms-2 me-1 f-lg-14 f-sm-12 fw-bold mb-0">
                {text}
            </p>
            <div className={`icon d-flex align-items-center justify-content-center rounded-circle ${icon_class}`} >
                {icon}
            </div>
        </div>    
      </a>
    </div>
  )
}

export default Wave;