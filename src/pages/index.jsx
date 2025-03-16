
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicesHome from '@/components/Home/ServicesHome';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import RedefineFuture from '@/components/Home/RedefineFuture';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import Clients from '@/components/Home/Clients';
import ExperienceRocket from '@/components/Home/ExperienceRocket';
import OurDreamcoders from '@/components/UI/InfoCardWithImage/InfoCardWithImage';
import BlogHome from '@/components/Home/BlogHome';
import Form from '@/components/UI/Form/Form';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import { useTranslation } from "react-i18next";


export default function Home() {

  const { t , ready } = useTranslation('home');

  if (!ready) {
    console.log('Please');
    
  }


    
  return (
    <>
      <MetaDecorator 
        title="meta_datos.meta_title_Home"
        description="meta_datos.meta_description_Home"
          url="" />
      <main>
        <ContainerGrill>
            <BannerPrincipal 
              withWave
              title="Desarrolladores de software"
              subtitle="Nuestra experiencia →"/>

            <RedefineFuture />
        </ContainerGrill>            
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='cube' />     
          <Clients />
          <ServicesHome />
          <ExperienceRocket />
          <OurDreamcoders 
            withButton 
            title="Nuestros dicen que somos un excelente lugar para trabajar" />
          <BlogHome />
          <Form />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home','common'])), 
      
    },
  };
}