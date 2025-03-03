
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicesHome from '@/components/Home/ServicesHome';
import BannerPrincipal from '@/components/Banners/BannerPrincipal';
import RedefineFuture from '@/components/Home/RedefineFuture';
import ContainerAnimation from '@/components/Containers/ContainerAnimation';
import Clients from '@/components/Home/Clients';
import ExperienceRocket from '@/components/Home/ExperienceRocket';
import OurDreamcoders from '@/components/Home/OurDreamcoders';
import BlogHome from '@/components/Home/BlogHome';
import Form from '@/components/Home/Form';
import ContainerMain from '@/components/Containers/ContainerMain';
import { useTranslation } from "react-i18next";


export default function Home() {

  const { t } = useTranslation('home');

    
  return (
    <>
      <MetaDecorator 
        title="meta_datos.meta_title_Home"
        description="meta_datos.meta_description_Home"
          url="" />
      <main>
        <ContainerMain>
            <BannerPrincipal 
              withWave
              title={t('wave')}
              subtitle="Nuestra experiencia →"/>

            <RedefineFuture />
        </ContainerMain>            
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='cube' />     
          <Clients />
          <ServicesHome />
          <ExperienceRocket />
          <OurDreamcoders />
          <BlogHome />
          <Form />
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
}