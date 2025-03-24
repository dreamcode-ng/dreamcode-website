import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BannerStories from '@/components/StoriesCustomers/BannerStories/BannerStories';
import StoriesCustomers from '@/components/StoriesCustomers/Customers/StoriesCustomers';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import Form from '@/components/UI/Form/Form';
export default function Projects() {

  const { t } = useTranslation('stories');

  return (
    <>
      <MetaDecorator 
        title={t('projects.title')}
        description={t('projects.subtitle')}
        url="" />
      <ContainerSection>
        <BannerStories />
      </ContainerSection>
      <ContainerSection>
        <StoriesCustomers />
      </ContainerSection>
      <Form />

    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['stories','layout', 'form'])),
    },
  };
};
