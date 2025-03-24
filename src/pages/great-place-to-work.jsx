import ContainerSection from '@/components/UI/Containers/ContainerSection'
import OurDreamcoders from '@/components/UI/InfoCardWithImage/InfoCardWithImage'
import Head from 'next/head';
import ReasonsWork from '@/components/Great/ReasonsWork';
import Form from '@/components/UI/Form/Form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans } from 'react-i18next';
import { useTranslation } from "react-i18next";



export default function Great() {

  const { t } = useTranslation('gptw');

  
  return (
    <>
      <Head>
        <title>Great</title>
        <meta name="description" content="Great" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
      <OurDreamcoders 
            isAbout
            title={
                <Trans i18nKey="title_primary" ns="gptw">
                  Nuestros <span className='m_color f_800'>DreamCoders</span> dicen que somos un excelente lugar para trabajar
                </Trans>
            } /> 
      <ContainerSection>
          <h3 className='w_color'>{t('subtitle')}</h3>
      </ContainerSection>
      <ReasonsWork />
      <Form noTitle />
      </main>
    </>
  )
}


export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['gptw', 'layout', 'form'])),
    },
  };
};
