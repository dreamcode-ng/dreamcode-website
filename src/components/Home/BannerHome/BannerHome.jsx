import React from 'react';
import Link from 'next/link';
//import Mouse from '@/components/Mouse';
import { Trans } from 'react-i18next';


function BannerHome({ title, wave }) {
  return (
    <div className='banner-home line-break d-flex align-items-center justify-content-center text-white text-center '>     
        <div className='container pb-5'>
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-12 d-flex flex-column align-items-center text-center wave-container">         
            <div className="d-flex align-items-center welcome text-white rounded-pill px-2 py-2 shadow-lg " style={{ maxWidth: "300px" }}>
                <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "44px", height: "44px" }}>
                <span className="fs-3 wave-hand">👋</span>
                </div>
                <p className="ms-2 me-3 f-lg-14 fw-bold mb-0">
                    {wave}
                </p>
            </div>     

            <h1 className="display-1 f_500 py-4">
                Desarroladores de <br></br><strong>Software</strong>
            </h1>
            <p className="m_color fs-5"><Link href='/about' className='m_color'>Nuestra experiencia →</Link></p>
            </div>
        </div>
        </div> 
  </div>
  )
}

export default BannerHome;