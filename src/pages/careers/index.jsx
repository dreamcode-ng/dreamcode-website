import Head from 'next/head'
import Link from 'next/link';
import listJobsEn from '../../assets/jobs/enJobs.json';
import listJobsEs from '../../assets/jobs/esJobs.json';
import { useTranslation } from 'next-i18next';
import TabCareers from '@/components/Careers/TabCareers';

const Blog = () => {

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const listJob = lang === 'en' ? listJobsEn : listJobsEs;

  return (
    <>
      <Head>
        <title>Careers</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TabCareers />
      <main className='vh-100'>
        <h1 className='w_color' >Careers</h1>
        <ul>
          {listJob.map((job) => (
            <li key={job.id}>
              <Link href={`/careers/${job.url}`}>{job.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Blog;
