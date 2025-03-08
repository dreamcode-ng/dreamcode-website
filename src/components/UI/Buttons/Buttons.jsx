import React from 'react';
import style from './buttons.module.css';
import Link from 'next/link';
//import { ButonUno } from "./Botones";


export const ButtonIcon = ({ link, text, className }) => {
  return (
    <div className={`d-flex flex-column  ${className} mt-5`}>
        <Link href={link} className={`${style.btnIcon} text-dark f-lg-18 f_600 rounded-pill px-4 py-3`}>{text}</Link>
    </div>
  )
}


