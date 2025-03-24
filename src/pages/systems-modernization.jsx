import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
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

  const { t } = useTranslation('modernization');
  const data = t('how_migration_items', { returnObjects: true }) ;



  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="systems-modernization" />
      <ContainerGrill>
        <BannerPrincipal 
          title={t('title_primary')}
          subtitle={t('subtitle')} />
          <ContainerAnimation 
            title={t('title_animation')}
            text={t('subtitle_animation')}
            btn={t('btn_animation')}
            animation='graphic' />  
      </ContainerGrill>
      <ConsultingProcess 
        title={t('title_modern_system')}
        subtile={t('subtile_modern_system')}
        title_one={t('initial_title')}
        title_two={t('strategic_title')}
        title_three={t('controlled_title')}
        title_four={t('optimization_title')}
        description_one={t('initial_description')}
        description_two={t('strategic_description')}
        description_three={t('controlled_description')}
        description_four={t('optimization_description')}
        />
      <HowMigrate 
        title={t('how_migratiom_title')}
        dataList={data}/>
      <BannerVideo
        withSubtile
        subtitle={t('title_video')}
        title={t('subtitle_video')}
        url={URL_YOUTUBE_SQUARE} />
      <Form />  
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['modernization', 'layout', 'form' ])),
    },
  };
};
