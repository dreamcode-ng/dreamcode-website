import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import LineTime from '@/components/UI/Creating/LineTime';
import StrategicAdvantages from '@/components/DataBase/StrategicAdvantages';
import { AccordionSection } from '@/components/UI/Accordion/Accordion';
import Form from '@/components/UI/Form/Form';

export default function DatabaseManagement() {

  const { t } = useTranslation('DatabaseManagement');
  const data = {
    accordion: [
      {
        items: [
          { title: "1. Definición de necesidades del proyecto:", 
            description: "Se realiza un seguimiento constante para asegurar que los miembros del equipo estén alineados con los objetivos del proyecto, realizando ajustes según sea necesario, con el apoyo continuo del área de recursos humanos e ingeniería." },
          { title: "2. Definición de necesidades del proyecto:", 
            description: "Se realiza un seguimiento constante para asegurar que los miembros del equipo estén alineados con los objetivos del proyecto, realizando ajustes según sea necesario, con el apoyo continuo del área de recursos humanos e ingeniería." }
        ],
        name: "Desde la evaluación hasta la consolidación de un equipo TI"
      }
    ]}

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
      <StrategicAdvantages />
      <AccordionSection 
        title={data.accordion[0].name}
        items={data.accordion[0].items} />
      <LineTime />
      <Form />
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
