// pages/blog/[urlId].jsx
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useRouter } from 'next/router';
import listJobsEn from '@/assets/jobs/enJobs.json';
import listJobsEs from '@/assets/jobs/esJobs.json';
import { useTranslation } from 'react-i18next';
import NotFound from './../404';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';


export default function Offert () {

  // Obtiene el urlId de la URL
  const router = useRouter();
  const { urlId } = router.query; 

  // Obtiene idioma
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const listJobs = lang === 'en' ? listJobsEn : listJobsEs;

  let isActive = true;

        const jobsColors = ['color1', 'color2', 'color3', 'color4'];

      listJobs.forEach((listJobs, index) => {
          listJobs.color = jobsColors[index % jobsColors.length];
      });
    
    let getProfile;
    if (isActive) {
      getProfile = listJobs.find(job => job.url === urlId);
    }
      
    if (!getProfile || !isActive){
      return <NotFound />;
    }

    const { name , description, color, experts, rol, modality } = getProfile;



  return (
    <main className='vh-100'>
      <h1 className='w_color' >{name}</h1>
      <p>{description} </p>

    </main>
  );
};

export const getStaticProps = async ({ locale }) => {
  
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common' , 'layout', 'form'])),
    },
  };
};
