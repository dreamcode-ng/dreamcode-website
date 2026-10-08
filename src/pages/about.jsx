import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useTranslation } from "next-i18next";
import { Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DreamcodeSection from '@/components/About/DreamcodeSection';
import Team from '@/components/About/Team';
import SliderAbout from '@/components/About/SliderAbout';
import InfoCardWithImage from '@/components/UI/InfoCardWithImage/InfoCardWithImage';
import Talents from '@/components/About/Talents';
import { ProfessionalService } from '@/components/Schema';

export default function About() {

  const { t } = useTranslation('about');

  return (
    <>
      <ProfessionalService
        name="DreamCode Software"
        description="Software development and IT outsourcing company in Colombia, providing specialized teams aligned with business goals across industries."
        url="https://dreamcodesoft.com/about"
        serviceArea={["Colombia", "United States", "LATAM"]}
        addressCountry="CO"
        addressLocality="Cali"
        latitude={3.4516}
        longitude={-76.5320}
        openingHours={["Mo-Fr 09:00-18:00"]}
        priceRange="$$"
      />

      <MetaDecorator
        title={t('meta_title')}
        description={t('meta_description')}
        url="about" />
      <InfoCardWithImage
        title={
          <Trans i18nKey="title_primary" ns="about">
            El futuro nos pertenece, lo estamos construyendo con tecnología que <span className='m_color f_800'>conecta </span>y <span className='m_color f_800'>transforma</span>
          </Trans>}
        text={t('subtitle')} />
      <DreamcodeSection />
      <Team />
      <SliderAbout />
      <Talents />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['about' , 'layout', 'form'])),
    },
  };
};