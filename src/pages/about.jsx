import Head from 'next/head'
import '@/styles/About.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DreamcodeSection from '@/components/About/DreamcodeSection';
import Team from '@/components/About/Team';

export default function About() {

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DreamcodeSection />
      <Team />
      
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
