import ContainerSection from '@/components/UI/Containers/ContainerSection'
import OurDreamcoders from '@/components/UI/InfoCardWithImage/InfoCardWithImage'
import Head from 'next/head';
import ReasonsWork from '@/components/Great/ReasonsWork';
import Form from '@/components/UI/Form/Form';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



export default function Great() {
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
            title="Nuestros DreamCoders dicen que somos un excelente lugar para trabajar" /> 
      <ContainerSection>
          <h3 className='w_color'>
          Nuestros DreamCoders reconocen que su experiencia dentro de la compañía es altamente satisfactoria, resaltan un ambiente laboral agradable y lleno de bienestar, donde las personas son el primer y más importante criterio en cada decisión. Nos sentimos orgullosos de lo que dicen nuestros colaboradores, conoce porque somos un excelente lugar para trabajar:
          </h3>
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
      ...(await serverSideTranslations(locale, ['great', 'layout', 'form'])),
    },
  };
};
