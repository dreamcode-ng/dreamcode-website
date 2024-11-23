import Head from 'next/head'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Talents from '@/components/Dreamcoders/Talents';
export default function Dreamcoders() {

  const { t } = useTranslation('home');

  return (
    <>
      <Head>
        <title>Dreamcoders</title>
        <meta name="description" content="Dreamcoders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className='text-center pt-4 mt-5'>{t('bannerHome.btn_slider_one')} Dreamcoders</h1>
        <p>{t('locale')}</p>
      <Talents />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};
