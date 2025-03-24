// pages/blog/index.jsx
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BannerBlog from '@/components/Blog/BannerBlog';
import TabBlog from '@/components/Blog/TabBlog';

export default function Blog () {


  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="contact" />
      <BannerBlog />
      <TabBlog />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['blog' , 'layout', 'form'])),
    },
  };
};