import Head from 'next/head'
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Services() {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <h1 className='text-center pt-4'>{t('homePage.bannerHome.btn_slider_one')} Service</h1>
      <p>{t('locale')}</p>

      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
