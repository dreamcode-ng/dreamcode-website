import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import Challenges from '@/components/UI/Creating/Challenges';
import ConsultingProcess from '@/components/UI/Creating/ConsultingProcess';
import Form from '@/components/UI/Form/Form';


export default function itConsulting() {

  const { t } = useTranslation('ItConsulting');

  return (
    <>
      <MetaDecorator 
        title={t('it-consulting.title')}
        description={t('it-consulting.subtitle')}
        url="" />
      <ContainerGrill>
        <BannerPrincipal 
          title="Consultoría TI"
          subtitle="Convierte tus desafíos tecnológicos en logros tangibles" />
          <ContainerAnimation 
            title={'Convierte tus desafíos tecnológicos en logros tangibles'}
            text={'Alineamos tu infraestructura tecnológica con las tendencias actuales del sector. Analizamos escenarios clave para facilitar decisiones estratégicas y rentables guiando el mantenimiento y desarrollo de tus sistemas, mejorando el uso de recursos y asegurando un crecimiento digital sostenible.'}
            animation='circle' />  
      </ContainerGrill>
      <Challenges />
      <ConsultingProcess 
        withNumber
        title="Un proceso completo en consultoría" />
      <Form />

    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['itConsulting', 'layout', 'form'])),
    },
  };
};
