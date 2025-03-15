import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import Specialize from '@/components/SoftwareDev/Specializes/Specialize';
import BannerSlider from '@/components/SoftwareDev/BannerSlider/BannerSlider';

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
      <ContainerGrill>
        <BannerPrincipal 
          title="Desarrollo de software"
          subtitle="Convierte tus ideas en soluciones digitales de alto impacto" />
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='code' />  
      </ContainerGrill>
      <Specialize title="En esto nos especializamos"/>
      <BannerSlider />
    </>
  )
}