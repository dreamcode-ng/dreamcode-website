import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import { useRouter } from 'next/router';
import InfoJob from '@/components/Position/InfoJob';
import FormCareers from '@/components/UI/FormCareers/FormCareers';
import { useTranslation } from 'next-i18next';
import BannerPrimary from '@/components/Position/BannerPrimary';
import { JobPosting } from '@/components/Schema';
import NotFound from './../404';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Offert({ job }) {
  const router = useRouter();

  // Si la página aún se está generando, mostramos un loading
  if (router.isFallback) {
    return <p className='text-center vh-100'>Cargando...</p>;
  }

  // Si el trabajo no existe, mostramos una página 404
  if (!job) {
    return <NotFound />;
  }

  const { t } = useTranslation('profile');

  const { name, experts, english, location, remote, years, rol , url} = job;

  return (
    <>
      <JobPosting
        jobTitle={name}
        description={name}
        datePosted={job.datePosted}
        employmentType={job.employmentType}
        url={`https://dreamcodesoft.com/careers/${url}`}
        jobLocation={{
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: location,
            addressCountry: "CO"
          }
        }}
        hiringOrganization={{
          "@type": "Organization",
          name: "DreamCode Software",
          url: "https://dreamcodesoft.com",
          logo: "https://dreamcodesoft.com/logo.png"
        }}
        experienceRequirements={years}
        qualifications={experts.join(", ")}
        responsibilities={rol.join("; ")}
        jobLocationType={remote ? "TELECOMMUTE" : "ON_SITE"}
      />
      <MetaDecorator
        title={name}
        description={rol}
        url={url} />
      <BannerPrimary
        description={t('subtitle')}
        name={name}
        years={years}
        english={english}
        location={location} />
      <InfoJob
        rol={rol}
        experts={experts}
        modality={remote}
      />
      <FormCareers noTitle />
    </>
  );
}

// Define las rutas que deben ser pre-generadas
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
      ...(await serverSideTranslations(locale, ['profile', 'layout', 'form'])),
    },
    revalidate: 10, // Opcional: ISR para actualizar cada 10s
  };
};
