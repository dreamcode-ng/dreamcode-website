import React from 'react';
import style from '@/components/Buttons/buttons.module.css';
import Link from 'next/link';
//import { ButonUno } from "./Botones";


export const ButtonIcon = ({ link, text, className }) => {
  return (
    <div className={`${className} mt-5`}>
        <Link href={link} className={`${style.btnIcon}  btn-lg`}>{text}</Link>
    </div>
  )
}


