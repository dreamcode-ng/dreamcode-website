import React from 'react';
import dynamic from 'next/dynamic';

const YouTube = dynamic(() => import('react-youtube'), { ssr: false });

export function Video({ isPlaying, setIsPlaying }) {

    const playVideo = () => {
        setIsPlaying(!isPlaying);
      };
      
    return(
            <>                
            <div className={`video_info ${!isPlaying ? ' ' : 'video_info_no_img' }`} >
            {isPlaying && (
                <YouTube
                    videoId="CKhhxRhBwcs"
                    opts={{
                        width: "888",
                        height: "500",
                        playerVars: {
                        autoplay: isPlaying ? 1 : 0,
                        autohide: 1,
                        controls: 0,
                        modestbranding: 1,
                        rel: 0,
                        showinfo: 0,
                        },
                    }}
                    onEnd={playVideo}
                />
            )}               
                {!isPlaying && (
                    <div className='video_icon' onClick={playVideo}><i className="ti-control-play"  ></i></div>
                )}
            </div>               
            </>
        );
  }


  export function AreaSlider ({children, className}) {
    return(
        <>
            <div className={`area-slider d-flex flex-column ${className}`}>
                {children}
            </div>
        </>
    );
}