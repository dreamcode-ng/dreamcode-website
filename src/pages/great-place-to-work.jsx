
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import OurDreamcoders from '@/components/UI/InfoCardWithImage/InfoCardWithImage'
import ReasonsWork from '@/components/Great/ReasonsWork';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Trans } from 'react-i18next';
import { useTranslation } from "react-i18next";



export default function Great() {

  const { t } = useTranslation('gptw');

  
  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="great-place-to-work" />
      <main className=''>
      <OurDreamcoders 
            isAbout
            title={
                <Trans i18nKey="title_primary" ns="gptw">
                  Nuestros <span className='m_color f_800'>DreamCoders</span> dicen que somos un excelente lugar para trabajar
                </Trans>
            } /> 
      <ContainerSection>
          <h3 className='w_color'>{t('subtitle')}</h3>
      </ContainerSection>
      <ReasonsWork />
      </main>
    </>
  )
}


export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['gptw', 'layout', 'form'])),
    },
  };
};
