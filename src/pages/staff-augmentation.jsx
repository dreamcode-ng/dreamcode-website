import Head from 'next/head'
import '@/styles/Staff.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Staff() {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Staff</title>
        <meta name="description" content="Staff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='vh-100'>
      <h1 className='w_color text-center pt-4'>Staff</h1>
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
