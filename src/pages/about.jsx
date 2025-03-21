import Head from 'next/head'
import '@/styles/About.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DreamcodeSection from '@/components/About/DreamcodeSection';
import Team from '@/components/About/Team';
import SliderAbout from '@/components/About/SliderAbout';
import InfoCardWithImage from '@/components/UI/InfoCardWithImage/InfoCardWithImage';
import Talents from '@/components/About/Talents';

export default function About() {

  const { t } = useTranslation();
  const texto = "Estamos convencidos de que la innovación y el cambio digital definen los negocios, fomentan el desarrollo y reconfiguran el entorno global."

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InfoCardWithImage 
        text={texto}
        title="El futuro nos pertenece, lo estamos construyendo con tecnología que conecta y transforma" />
      <DreamcodeSection />
      <Team />
      <SliderAbout />
      <Talents />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about' , 'layout', 'form'])),
    },
  };
};
