// pages/blog/index.jsx
import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BannerBlog from '@/components/Blog/BannerBlog';
import TabBlog from '@/components/Blog/TabBlog';

export default function Blog () {


  return (
    <>
    <Head>
      <title>Blog</title>
      <meta name="description" content="About" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <BannerBlog />
      <TabBlog />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common' , 'layout', 'form'])),
    },
  };
};