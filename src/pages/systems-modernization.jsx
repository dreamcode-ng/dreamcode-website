import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import Form from '@/components/UI/Form/Form';
import ConsultingProcess from '@/components/UI/Creating/ConsultingProcess';
import HowMigrate from '@/components/SystemsMod/HowMigrate';
import { URL_YOUTUBE_SQUARE } from '@/assets/Constants';
import BannerVideo from '@/components/UI/BannerVideo/BannerVideo';

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
      <ConsultingProcess 
        title="Avanza con un sistema moderno"
        subtile="¿Cómo lo hacemos posible?" />
      <HowMigrate />
      <BannerVideo
        withSubtile
        subtitle="Cómo SquareTrade reimaginó su infraestructura"
        title="Descubre cómo hicimos realidad la super app Bolívar Conmigo"
        url={URL_YOUTUBE_SQUARE} />
      <Form />  
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['system', 'layout', 'form' ])),
    },
  };
};
