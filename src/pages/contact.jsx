
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import Head from 'next/head';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import Form from '@/components/UI/Form/Form';
import Office from '@/components/Contact/Office'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Trans } from 'react-i18next';


export default function Contact() {

    const { t } = useTranslation('contact');

  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="contact" />
      <main > 
        <BannerPrincipal 
          withLink
          title={
            <Trans i18nKey="title_contact" ns="contact">
              <span className='m_color f_500'>Conectamos tu idea con el futuro </span> ¡Estamos listos para escucharte!
            </Trans>
          }
          link={t('btn_talk')}
          subtitle={t('subtitle')}/>
        <Office title={t('title_office')}/>
        <Form noTitle />
      </main>
    </>
  )
}


export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'layout', 'form'])),
    },
  };
};
