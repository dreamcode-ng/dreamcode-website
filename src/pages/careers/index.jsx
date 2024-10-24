// pages/blog/index.jsx
import Link from 'next/link';
import listJobsEn from '../../assets/jobs/enJobs.json';
import listJobsEs from '../../assets/jobs/esJobs.json';
import { useTranslation } from 'next-i18next';

const Blog = () => {

  const { i18n } = useTranslation();
  const lang = i18n.language;
  const listJob = lang === 'en' ? listJobsEn : listJobsEs;

  return (
    <main>
      <h1>Careers</h1>
      <ul>
        {listJob.map((job) => (
          <li key={job.id}>
            <Link href={`/careers/${job.url}`}>{job.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Blog;
