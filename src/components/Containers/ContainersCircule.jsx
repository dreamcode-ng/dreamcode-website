
import React from 'react';
import style from '@/components/Containers/containers.module.css';

function ContainerCircule({ children, className}) {
  return (
    <div className={`${style.containerCircule} position-relative ${className}`}>
      {children}
    </div>
  )
}

export default  ContainerCircule ;