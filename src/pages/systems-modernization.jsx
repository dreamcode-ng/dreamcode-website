import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import '@/styles/Services.module.css'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function SystemsModernization() {

  const { t } = useTranslation('SystemsModernization');

  return (
    <>
      <MetaDecorator 
        title={t('systems-modernization.title')}
        description={t('systems-modernization.subtitle')}
        url="" />
      <main className='vh-100'>
      <h1 className='w_color text-center pt-4'>Systems's Modernization</h1>
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
