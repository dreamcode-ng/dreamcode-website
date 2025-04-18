
import React from 'react';
import style from '@/components/UI/Containers/containers.module.css';

function ContainerCircule({ children, className}) {
  return (
    <div className={`${style.containerCircule}  line-break  position-relative ${className}`}>
      {children}
    </div>
  )
}

export default  ContainerCircule ;