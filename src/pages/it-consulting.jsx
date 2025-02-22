import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function itConsulting() {

  const { t } = useTranslation('ItConsulting');

  return (
    <>
      <MetaDecorator 
        title={t('it-consulting.title')}
        description={t('it-consulting.subtitle')}
        url="" />
      <main className='vh-100'>
      <h1 className='w_color text-center pt-4'>IT Consulting</h1>
      <p>{t('locale')}</p>

      </main>
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['itConsulting'])),
    },
  };
};
