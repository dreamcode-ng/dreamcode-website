import React from 'react';
import style from '@/components/UI/Containers/containers.module.css';


export default function ContainerGrill({children, className}) {
  return (
    <div className={`position-relative h-auto ${className}`}>
      <div className={`${style.background_main}`}></div>
        {children}
    </div>
  )
}



