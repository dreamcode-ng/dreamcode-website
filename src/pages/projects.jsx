import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css';
import { Trans } from 'react-i18next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BannerStories from '@/components/StoriesCustomers/BannerStories/BannerStories';
import StoriesCustomers from '@/components/StoriesCustomers/Customers/StoriesCustomers';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
export default function Projects() {

  const { t } = useTranslation('stories');

  

  return (
    <>
      <MetaDecorator 
        title={t('projects.title')}
        description={t('projects.subtitle')}
        url="" />
      <ContainerSection>
          <Trans i18nKey="title_banner">
          Our projects turned <span className='w_color'>into success stories</span>
          </Trans>
        <BannerStories 
          title_banner={t('title_banner')}
          btn_banner={t('btn_banner')}
          subtitle_banner={t('subtitle_banner')}
          text_banner={t('text_banner')} />
      
      </ContainerSection>
      <ContainerSection>
        <StoriesCustomers />
      </ContainerSection>

    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['stories'])),
    },
  };
};
