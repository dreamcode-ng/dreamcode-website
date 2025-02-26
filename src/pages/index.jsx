
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { FaArrowRight } from 'react-icons/fa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ServicesHome from '@/components/Home/ServicesHome';
import BannerHome from '@/components/Home/BannerHome/BannerHome';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Trans } from 'react-i18next';
import RedefineFuture from '@/components/Home/RedefineFuture';
import TecnoAdapta from '@/components/Home/TecnoAdapta';

export default function Home() {
    
  return (
    <>
      <MetaDecorator 
        title="meta_datos.meta_title_Home"
        description="meta_datos.meta_description_Home"
        url="" />
    <>
      <div className="position-relative h-auto ">
        <div className="background-grid"></div>
        <BannerHome wave='Te damos la bienvenida al futuro' />
        <div className="container-dc container mt-5">
        <RedefineFuture />
        </div>
      </div>
        <div className="container-dc container mt-5">

        <TecnoAdapta />
        </div>
        <ServicesHome />

    </>
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), 
    },
  };
}