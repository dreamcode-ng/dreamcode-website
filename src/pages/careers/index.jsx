import Head from 'next/head'
import Link from 'next/link';
import listJobsEn from '../../assets/jobs/enJobs.json';
import listJobsEs from '../../assets/jobs/esJobs.json';
import { useTranslation } from 'next-i18next';
import TabCareers from '@/components/Careers/TabCareers';
import CirculeList from '@/components/UI/CirculeList/CirculeList';
import BannerBenefits from '@/components/Careers/BannerBenefits';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import React from 'react';
import ContainerSection from '@/components/UI/Containers/ContainerSection';

const Blog = () => {

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const listJob = lang === 'en' ? listJobsEn : listJobsEs;
  const data = {
    circuleList: [
      {
        title: "Conoce los beneficios de ser parte de \n nuestro equipo humano",
        datalist: [ 
          "Medicina prepagada",
          "Seguro de vida", 
          "Espacios de integración para todos", 
          "Desayuno cumpleaños",
          "Aniversario DreamCoder", 
          "Bonificación extralegal por resultados",
          "Licencia por matrimonio",
          "Regalo por pregrado",
          "Regalo por nacimiento de hij@",
          "Capacitaciones y cursos",
          "Kit de bienvenida"
        ]
      }
    ]
  }

  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TabCareers />
      <BannerBenefits />
      <CirculeList 
        title={data.circuleList[0].title}
        dataList={data.circuleList[0].datalist}/>
      <ContainerSection>     
        <ContainerCircule className="px_50 py_60">
          <h2 className='w_color text-center mb-5'>Descubre por qué nuestros <span>DreamCoders</span> eligen trabajar aquí.</h2>
          <ButtonIcon className="align-items-center mt5" link="/blog" text="Leer más +" />
        </ContainerCircule>
      </ContainerSection>  
      
    </>
  );
};

export default Blog;
