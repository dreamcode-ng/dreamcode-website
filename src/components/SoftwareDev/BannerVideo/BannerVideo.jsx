import ContainerSection from '@/components/UI/Containers/ContainerSection';
import React from 'react';
import style from './bannerVideo.module.css';

function BannerVideo() {
  return (
        <div className={style.bannerVideo}>
            <div className='container-dc container'>
                <div className='row d_flex align-items-center justify-content-center gap-5'>
                    <div className='col-lg-6 col-md-7 col-sm-12'>
                        <h2 className='text-center m_color '>Descubre cómo hicimos realidad la super app Bolívar Conmigo</h2>
                    </div>
                    <div className='col-lg-12 col-md-7 col-sm-12'>
                        <iframe className={style.video_info}
                        frameBorder="0" 
                        allowFullScreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  
                        title="Sueña para transformar el futuro." 
                        width="770" 
                        height="360" 
                        src="https://www.youtube.com/embed/r3-nGMCka-o?si=Sx-H7uaV_bWf1UXY" >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BannerVideo;