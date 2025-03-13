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
import LineTime from '@/components/UI/Creating/LineTime';
import Challenges from '@/components/UI/Creating/Challenges';
import ConsultingProcess from '@/components/UI/Creating/ConsultingProcess';
import { AccordionSection , AccordioChild } from '@/components/UI/Accordion/Accordion';



export default function Staff() {

  const { t } = useTranslation();
  const data = {
    accordion: [
      {
        name: "Accordion Pagina Servicios",
        items: [
          { titlle: "services", description: "Solutions for the news generation" },
          { titlle: "about", description: "History in the challenge for the world" }
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
        title="Desde la evaluación hasta la consolidación de un equipo TI"
        items={data.accordion[0].items}
      />
      <LineTime />
      <Wave 
        className=" -bg-secondary"
        text="Conectemos 👋"
        icon_class="-bg-cian"
        icon={<FaLinkedin />} />

      <ConsultingProcess />
      <Challenges />
      <TalentBox />


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
