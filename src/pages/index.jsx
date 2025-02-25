
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useTranslation } from 'next-i18next';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import Mouse from '@/components/Mouse';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SolutionsCard from '@/components/SolutionsCard/Card';

export default function Home() {
  
  const { t } = useTranslation('home');
  
  return (
    <>
      <MetaDecorator 
        title={t('meta_datos.meta_title_Home')}
        description={t('meta_datos.meta_description_Home')}
        url="" />

    <div className="position-reñative h-auto ">
      <div className="background-grid"></div>
        <div className='banner-home d-flex align-items-center justify-content-center text-white text-center '>
          
          <div className='container pb-5'>
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-12 d-flex flex-column align-items-center text-center wave-container">         
                <div className="d-flex align-items-center welcome text-white rounded-pill px-2 py-2 shadow-lg " style={{ maxWidth: "300px" }}>
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: "44px", height: "44px" }}>
                    <span className="fs-3 wave-hand">👋</span>
                  </div>
                  <p className="ms-2 me-3 f-lg-14 fw-bold mb-0">Te damos la bienvenida al futuro</p>
                </div>       
                <h1 className="display-2 f_500 py-4">
                  Desarrolladores de <br></br><span className="w_color fw-bold">software</span>
                </h1>
                <p className="m_color fs-5"><Link href='/about'>Nuestra experiencia →</Link></p>
              </div>
            </div>
          </div> 


        </div>
        <div className="container-dc container  mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <SolutionsCard 
                title="Desarrollo de software"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <SolutionsCard 
                title="Desarrollo de software"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <SolutionsCard 
                title="Desarrollo de software"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <SolutionsCard 
                title="Desarrollo de software"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <SolutionsCard 
                title="Desarrollo de software"
              />
            </div>
          </div>
        </div>

      </div>
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