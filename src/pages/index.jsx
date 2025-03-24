
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
import { Trans } from 'react-i18next';


export default function Home() {

  const { t } = useTranslation('home');

    
  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="" />
      <main>
        <ContainerGrill>
            <BannerPrincipal 
              withWave
              withLink
              textWave={t('wave')}
              href="/projects"
              title={
                <Trans i18nKey="title_home" ns="home">
                  Software <strong>developers</strong>
                </Trans>
              }
              link={t('text_link')}/>

            <RedefineFuture />
        </ContainerGrill>            
        <ContainerAnimation 
          title={t('title_animation')}
          text={t('subtile_animation')}
          btn={t('btn_animation')}
          animation='cube' />     
        <ServicesHome />
        <Clients />
        <ExperienceRocket />
        <OurDreamcoders 
          withButton 
          link="/great-place-to-work"
          btn={t('btn_read_more')}
          title={
            <Trans i18nKey="our_dreamcoders" ns="home">
              Nuestros <strong className='m_color'>DreamCoders</strong>dicen que somos un excelente lugar para trabajar
            </Trans>
          }     />    
        <BlogHome />
        <Form />
      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home','form','layout'])), 
      
    },
  };
}