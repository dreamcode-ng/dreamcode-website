import React from 'react';
import style from './recicly.module.css';
import Image from 'next/image';



  function ChallengeCards( { icon,  description}) {
    return (
      <div className={`${style.challenge_box} gap-3 d-flex justify-content-around position-relative`}>
            <div className={``}>
              <Image src="/img/staff-augmentation/talent-valor.svg" width={37} height={36} loading='lazy' alt="icon" />
            </div>
            <p className="text-center f-lg-18 p_color">{description}</p>
      </div>
    )
  }
export default function Challenges() {
  return (
    <div className="container-dc container py-5">
        <div className={`${style.challenge} position-relative`}>
            <div className="container">
                <div className={`${style.challenge_row}`}>
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                    <ChallengeCards 
                        description="Desalineación entre estrategia tecnológica y objetivos de negocio"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

