import Head from 'next/head';
import { FaLinkedin } from "react-icons/fa";
import Wave from '@/components/UI/Reusable/Wave';
import '@/styles/Staff.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import TalentBox from '@/components/UI/Creating/TalentBox';
import { AccordionSection , AccordioChild } from '@/components/UI/Accordion/Accordion';
import CirculeList from '@/components/UI/CirculeList/CirculeList';
import IconList from '@/components/StaffAug/IconList/IconList';
import Form from '@/components/UI/Form/Form';



export default function Staff() {

  const { t } = useTranslation('staff');
  const item_accordion = t('item_accordion', { returnObjects: true }) ;
  const item_list = t('item_list', { returnObjects: true });
  const data_talent = t('data_talent', { returnObjects: true });
  let title = "Staff \nAugmentation";

  return (
    <>
      <Head>
        <title>Staff</title>
        <meta name="description" content="Staff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerGrill>
        <BannerPrincipal 
          title={title}
          subtitle={t('subtitle')} />
          <ContainerAnimation 
            title={t('title_animation')}
            text={t('subtitle_animation')}
            btn={t('btn_animation')}
            animation='users' />  
      </ContainerGrill>
      <AccordionSection 
        title={t('title_accordion')}
        items={item_accordion} />
      <CirculeList 
        title={t('title_list')}
        dataList={item_list}/>  
      <IconList title={t('title_icons')}/>
      <TalentBox data={data_talent} />
      <Form />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['staff', 'layout', 'form'])),
    },
  };
};
