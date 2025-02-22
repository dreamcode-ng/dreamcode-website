import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function SoftwareDevelopment() {

  const { t } = useTranslation('projects');

  return (
    <>
      <MetaDecorator 
        title={t('projects.title')}
        description={t('projects.subtitle')}
        url="" />
      <main className='vh-100'>
      <h1 className='w_color text-center pt-4'>Software Development</h1>
      <p>{t('locale')}</p>

      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['projects'])),
    },
  };
};
