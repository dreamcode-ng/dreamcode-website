import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import LineTime from '@/components/UI/Creating/LineTime';

export default function DatabaseManagement() {

  const { t } = useTranslation('DatabaseManagement');

  return (
    <>
      <MetaDecorator 
        title={t('DatabaseManagement.title')}
        description={t('DatabaseManagement.subtitle')}
        url="" />
      <ContainerGrill>
        <BannerPrincipal 
          title="Gestión de bases de datos"
          subtitle="Convierte tu flujo de datos en procesos inteligentes y dinámicos" />
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='data' />  
      </ContainerGrill> 
       <LineTime />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['DatabaseManagement'])),
    },
  };
};
