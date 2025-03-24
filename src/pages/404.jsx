// pages/404.jsx
import React from 'react';
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { TbError404Off } from "react-icons/tb";


export default function Custom404 () {
  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <TbError404Off color='#3BF7E4' size={250}/>
      <h2 className='w_color f-lg-70 text-center my-4'>Ups!! Page Not Found</h2>
      <p className='f_800 f-lg-20'>Could not find requested resource</p>
      <p className='f_800 f-lg-20'>
        View <Link className="m_color f_800" href="/blog">all posts</Link>
      </p>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common' , 'layout', 'form'])),
    },
  };
};
