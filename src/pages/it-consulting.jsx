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

  const { t } = useTranslation('consulting');
  const challenge = t('items_challenge', { returnObjects: true });


  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="it-consulting" />
      <ContainerGrill>
        <BannerPrincipal 
          title={t('title_primary')}
          subtitle={t('subtitle')} />
          <ContainerAnimation 
            title={t('title_animation')}
            text={t('subtitle_animation')}
            btn={t('btn_animation')}
            animation='circle' />  
      </ContainerGrill>
      <Challenges 
        title={t('title_challenge')}
        data={challenge}/>
      <ConsultingProcess 
        withNumber
        title={t('title_process')}
        title_one={t('diagnosis')}
        title_two={t('strategic')}
        title_three={t('implementation')}
        title_four={t('monitoring')}
        description_one={t('diagnosis_description')}
        description_two={t('strategic_description')}
        description_three={t('implementation_description')}
        description_four={t('monitoring_description')} />
      <Form />

    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['consulting', 'layout', 'form'])),
    },
  };
};
