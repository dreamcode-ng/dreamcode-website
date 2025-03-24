import React from 'react';
import Link from 'next/link';
import style from './breadcrumb.module.css';

export default function Breadcrumb({ url, sectionClass, inicio, namePage }) {
  return (
    <section className={`${sectionClass}`}>
        <nav aria-label="breadcrumb">
            <ol className={style.breadcrumb}>
                <li className="f_p f-lg-15  breadcrumb-item">
                    <Link className="m_color" href={`${url}`}>{inicio}</Link>
                </li>
                <li className="f_p f-lg-15 p_color breadcrumb-item active">
                    {namePage}
                </li>
            </ol>
        </nav>
    </section>
  )
}
