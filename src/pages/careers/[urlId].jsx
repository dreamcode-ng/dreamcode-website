import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useRouter } from 'next/router';
import listJobsEn from '@/assets/jobs/enJobs.json';
import listJobsEs from '@/assets/jobs/esJobs.json';
import { useTranslation } from 'react-i18next';
import BannerPrimary from '@/components/Position/BannerPrimary';
import NotFound from './../404';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Offert({ job }) {
  const router = useRouter();

  // Si la página aún se está generando, mostramos un loading
  if (router.isFallback) {
    return <p>Cargando...</p>;
  }

  // Si el trabajo no existe, mostramos una página 404
  if (!job) {
    return <NotFound />;
  }

  const { name, description } = job;

  return (
    <>
      <BannerPrimary 
        name={name}
        years=""
        english=""
        location="" />
    </>
  );
}

// 🔹 Define las rutas que deben ser pre-generadas
export const getStaticPaths = async () => {
  const listJobsEs = require('@/assets/jobs/esJobs.json');
  const listJobsEn = require('@/assets/jobs/enJobs.json');

  // Unimos los jobs de ambos idiomas
  const allJobs = [...listJobsEs, ...listJobsEn];

  const paths = allJobs.map(job => ({
    params: { urlId: job.url }, // Asegúrate de que 'job.url' coincide con la URL dinámica
  }));

  return {
    paths,
    fallback: true, // O 'blocking' si quieres SSR en nuevas rutas
  };
};

// 🔹 Obtiene los datos del trabajo basado en la URL
export const getStaticProps = async ({ params, locale }) => {
  const listJobsEs = require('@/assets/jobs/esJobs.json');
  const listJobsEn = require('@/assets/jobs/enJobs.json');

  // Detectar idioma
  const listJobs = locale === 'en' ? listJobsEn : listJobsEs;

  // Buscar el trabajo por URL
  const job = listJobs.find(job => job.url === params.urlId) || null;

  return {
    props: {
      job,
      ...(await serverSideTranslations(locale, ['common', 'layout', 'form'])),
    },
    revalidate: 10, // Opcional: ISR para actualizar cada 10s
  };
};
