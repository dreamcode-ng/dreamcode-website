import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerMain from '@/components/Containers/ContainerMain';
import BannerPrincipal from '@/components/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/Containers/ContainerAnimation';

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};



export default function SoftwareDevelopment() {

  const { t } = useTranslation('home');

  return (
    <>
      <MetaDecorator 
        title={t('projects.title')}
        description={t('projects.subtitle')}
        url="" />
      <ContainerMain>
        <BannerPrincipal 
          title="Desarrollo de software"
          subtitle="Convierte tus ideas en soluciones digitales de alto impacto" />
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='code' />  
      </ContainerMain>  
    </>
  )
}