import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';

export default function SystemsModernization() {

  const { t } = useTranslation();

  return (
    <>
      <MetaDecorator 
        title={t('systems-modernization.title')}
        description={t('systems-modernization.subtitle')}
        url="" />
      <ContainerGrill>
        <BannerPrincipal 
          title="Systems's Modernization"
          subtitle="Convierte tus sistemas heredados en soluciones rápidas y efectivas." />
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='graphic' />  
      </ContainerGrill>   
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
};
