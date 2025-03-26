import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { Trans, useTranslation } from "react-i18next";
import TabCareers from '@/components/Careers/TabCareers';
import CirculeList from '@/components/UI/CirculeList/CirculeList';
import BannerBenefits from '@/components/Careers/BannerBenefits';
import ContainerCircule from '@/components/UI/Containers/ContainersCircule';
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import React from 'react';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Careers() {

  const { i18n, t } = useTranslation('careers');
  const benefits = t('benefits', { returnObjects: true });
  

  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="contact" />
      <TabCareers 
        title={t('title_tab')}
        subtitle={t('subtitle_tab')}/>
      <BannerBenefits
        title={t('banner_title')}
        subtitle={t('banner_subtitle')}
        description={t('banner_description')} />
      <CirculeList 
        title={t('title_benefits')}
        dataList={Array.isArray(benefits) ? benefits : Object.values(benefits)}/>
      <ContainerSection>     
        <ContainerCircule className="px_50 py_60">
          <h2 className='w_color text-center mb-5 z-indez-9 position-relative'>
            {
              <Trans i18nKey="title_discover" ns="careers">
                Descubre por qué nuestros <span className='m_color f_800'>DreamCoders</span> eligen trabajar aquí.
              </Trans>
            }
          </h2>
          <ButtonIcon className="align-items-center mt-5 z-indez-9 position-relative" link="/great-place-to-work" text={t('btn_discover')} />
        </ContainerCircule>
      </ContainerSection>  
      
    </>
  );
};
export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['careers' , 'layout', 'form'])),
    },
  };
};
