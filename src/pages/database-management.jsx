import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function DatabaseManagement() {

  const { t } = useTranslation('DatabaseManagement');

  return (
    <>
      <MetaDecorator 
        title={t('DatabaseManagement.title')}
        description={t('DatabaseManagement.subtitle')}
        url="" />
      <main className='vh-100'>
      <h1 className='w_color text-center pt-4'>Database Management</h1>
      <p>{t('locale')}</p>

      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['DatabaseManagement'])),
    },
  };
};
