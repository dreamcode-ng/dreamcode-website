import React from 'react';


function Wave({ className , text , icon, icon_class, link}) {

  

  return (
    <div className='d-flex flex-column align-items-center text-center'>
      <a href={link}>
        <div className={`d-flex align-items-center ${className} text-white rounded-pill px-2 py-2 shadow-lg`} style={{ maxWidth: "300px" }}>
            <p className="ms-2 me-3 f-lg-14 f-sm-12 fw-bold mb-0">
                {text}
            </p>
            <div className={`d-flex align-items-center justify-content-center rounded-circle ${icon_class}`} style={{ width: "44px" , height: "44px"}}>
                {icon}
            </div>
        </div>    
      </a>
    </div>
  )
}

export default Wave;