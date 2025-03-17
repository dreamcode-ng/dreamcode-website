import React from 'react';
import style from './buttons.module.css';
import Link from 'next/link';

export const ButtonIcon = ({ link, text, className, onClick }) => {
  return (
    <div className={`d-flex flex-column ${className}`}>
      <Link 
        href={link} 
        className={`${style.btnIcon} text-dark f-lg-18 f_600 rounded-pill px-4 py-3`} 
        onClick={onClick} 
      >
        {text}
      </Link>
    </div>
  );
};
