import Head from 'next/head';
import { FaLinkedin } from "react-icons/fa";
import Wave from '@/components/UI/Reusable/Wave';
import '@/styles/Staff.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import TalentBox from '@/components/UI/Creating/TalentBox';
import { AccordionSection , AccordioChild } from '@/components/UI/Accordion/Accordion';
import CirculeList from '@/components/UI/CirculeList/CirculeList';
import IconList from '@/components/StaffAug/IconList/IconList';
import Form from '@/components/UI/Form/Form';



export default function Staff() {

  const { t } = useTranslation();
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
    ],
    circuleList: [
      {
        title: "Todo un equipo calificado en:",
        datalist: [ 
          "Arquitectura de software",
          "Control de calidad manual y automatizado", 
          "Control de calidad manual ", 
          "Arquitectura de software",
          "Control de calidad manual y automatizado", 
          "Arquitectura de software",
          "Control de calidad manual y automatizado", 
          "Arquitectura de software"
        ]
      }
    ]
    
  
  };

  return (
    <>
      <Head>
        <title>Staff</title>
        <meta name="description" content="Staff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerGrill>
        <BannerPrincipal 
          title="Staff Augmentation"
          subtitle="Convierte tus ideas en resultados tangibles con el talento especializado que necesitas" />
          <ContainerAnimation 
            title={'Tecnología que se adapta a tus necesidades'}
            text={'En DreamCode, ayudamos a las empresas a transformar sus operaciones, optimizar procesos y adaptarse al futuro. Creamos soluciones innovadoras que impulsan el crecimiento, la eficiencia y la competitividad, siempre alineadas con las necesidades únicas de cada cliente.'}
            animation='users' />  
      </ContainerGrill>
      <AccordionSection 
        title={data.accordion[0].name}
        items={data.accordion[0].items} />
      <CirculeList 
        title={data.circuleList[0].title}
        dataList={data.circuleList[0].datalist}/>  
      <IconList title="Principales tecnologías con las que trabajamos"/>
      <TalentBox />
      <Form />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
