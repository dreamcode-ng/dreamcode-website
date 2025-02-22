
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
//import Lottie from "lottie-react";
//import animationDreamcode from "@/assets/animations/animation-dreamcode.json";

export default function Home() {
  
  const { t } = useTranslation('home');
  
  return (
    <>
      <MetaDecorator 
        title={t('meta_datos.meta_title_Home')}
        description={t('meta_datos.meta_description_Home')}
        url="" />
      <main className='vh-100'>
          <div>
              <h1 className='w_color'>
                {t('service_home.service_title')}
              </h1>
          </div>
      </main>
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])), 
    },
  };
}