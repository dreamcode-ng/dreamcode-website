import Head from 'next/head'
import '@/styles/Staff.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerMain from '@/components/Containers/ContainerMain';
import BannerPrincipal from '@/components/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/Containers/ContainerAnimation';

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
      <ContainerMain>
        <BannerPrincipal 
          title="Staff Augmentation"
          subtitle="Convierte tus ideas en resultados tangibles con el talento especializado que necesitas" />
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='users' />  
      </ContainerMain>            
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
