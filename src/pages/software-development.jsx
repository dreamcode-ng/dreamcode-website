import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContainerGrill from '@/components/UI/Containers/ContainerGrill';
import BannerPrincipal from '@/components/UI/Banners/BannerPrincipal';
import ContainerAnimation from '@/components/UI/Containers/ContainerAnimation';
import Specialize from '@/components/SoftwareDev/Specializes/Specialize';
import BannerSlider from '@/components/SoftwareDev/BannerSlider/BannerSlider';
import Form from '@/components/UI/Form/Form';
import BannerVideo from '@/components/UI/BannerVideo/BannerVideo';
import { URL_YOUTUBE_BOLIVAR } from '@/assets/Constants';

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['software', 'layout', 'form'])),
    },
  };
};



export default function SoftwareDevelopment() {

  const { t } = useTranslation('software');
  const specialize = t('items_specialize', { returnObjects: true });


  return (
    <>
      <MetaDecorator 
        title={t('meta_title')}
        description={t('meta_description')}
        url="software-development" />
      <ContainerGrill>
        <BannerPrincipal 
          title={t('title_primary')}
          subtitle={t('subtitle')} />
          <ContainerAnimation 
            title={t('title_animation')}
            btn={t('btn_animation')}
            text={t('subtitle_animation')}
            animation='code' />  
      </ContainerGrill>
      <Specialize 
        btn={t('btn_specialize')}
        title={t('title_specialize')} 
        data={specialize}/>
      <BannerSlider />
      <BannerVideo 
        title={t('title_video')}
        url={URL_YOUTUBE_BOLIVAR}
        />
      <Form />
    </>
  )
}