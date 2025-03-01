
import React from 'react';
import style from '@/components/Containers/containers.module.css';

function ContainerCircule({ children, className}) {
  return (
    <div className={`${style.containerCircule} position-relative ${className}`}>
      {children}
    </div>
  )
}

function ContainerSingle ({ children}) {
  return (
    <div className=" position-relative">
      { children }
    </div>
  )
}

export default  ContainerCircule ;


/*

import React from 'react';
import style from '@/components/Containers/containers.module.css';

function Container ({ children, className}) {
  return (
    <div className={`position-relative ${className}`}>
      {children}
    </div>
  )
}

//const ContainerCircule = ({className}) => <Container className={`${style.containerCircule} ${className}`} />;
const ContainerCircule = ({className}) => <Container className={className} />;
const ContainerSingle = ({className}) => <Container className={`${style.containerSingle} ${className}`} />;


export { ContainerCircule, ContainerSingle };
*/