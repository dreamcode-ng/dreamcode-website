import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import LineTime from '@/components/UI/Creating/LineTime';
import StrategicAdvantages from '@/components/DataBase/StrategicAdvantages';
import { AccordionSection } from '@/components/UI/Accordion/Accordion';
import Form from '@/components/UI/Form/Form';
import { ProfessionalService } from '@/components/Schema';
export default function DatabaseManagement() {

  const { t } = useTranslation('data');
  const items_accordion = t('items_accordion', { returnObjects: true }) ;
  const line_items = t('line_items', { returnObjects: true }) ;
  const strategics = t('strategics', { returnObjects: true }) ;


  return (
    <>
      <ProfessionalService
        name="DreamCode Software - Database Management"
        description="Database management and optimization services including performance tuning, backup strategies, migration, and monitoring for reliable data infrastructure."
        url="https://dreamcodesoft.com/database-management"
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
        url="database-management" />
      <ContainerGrill>
        <BannerPrincipal
          title={t('title_primary')}
          subtitle={t('subtitle')} />
          <ContainerAnimation
            title={t('title_animation')}
            text={t('subtitle_animation')}
            btn={t('btn_animation')}
            animation='data' />
      </ContainerGrill>
      <StrategicAdvantages
        title={t('title_strategics')}
        data={strategics}/>
      <AccordionSection
        title={t('title_accordion')}
        items={items_accordion} />
      <LineTime data={line_items}/>
      <Form />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['data', 'layout', 'form' ])),
    },
  };
};