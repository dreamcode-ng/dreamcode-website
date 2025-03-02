
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicesHome from '@/components/Home/ServicesHome';
import BannerHome from '@/components/Home/BannerHome/BannerHome';
import RedefineFuture from '@/components/Home/RedefineFuture';
import TecnoAdapta from '@/components/Home/TecnoAdapta';
import Clients from '@/components/Home/Clients';
import ExperienceRocket from '@/components/Home/ExperienceRocket';
import OurDreamcoders from '@/components/Home/OurDreamcoders';
import BlogHome from '@/components/Home/BlogHome';
import Form from '@/components/Home/Form';
export default function Home() {
    
  return (
    <>
      <MetaDecorator 
        title="meta_datos.meta_title_Home"
        description="meta_datos.meta_description_Home"
          url="" />
      <main>
        <div className="position-relative h-auto ">
          <div className="background-grid"></div>
            <BannerHome wave='Te damos la bienvenida al futuro' />
            <RedefineFuture />
          </div>            
          <TecnoAdapta />      
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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), 
    },
  };
}