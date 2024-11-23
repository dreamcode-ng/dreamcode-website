
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BannerHome from '@/components/Home/BannerHome/BannerHome';


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])), 
    },
  };
}



export default function Home() {

  const { t } = useTranslation('home');

  return (
    <>
      <MetaDecorator 
        title={t('meta_datos.btn_slider_home')}
        description={t('meta_datos.meta_description_Home')}
        url="" />
      <main className='vh-100 '>
          <div className='bg_black starts-home '>
            <BannerHome />
            
          </div>
      </main>
    </>
  )
}


