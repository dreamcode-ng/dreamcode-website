import fs from 'fs';
import path from 'path';
import MetaDecorator from '@/components/MetaDatos/MetaDecorator';
import LandingPageRenderer from '@/components/Landing/LandingPageRenderer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styles from '@/components/Landing/landingPage.module.css';

function loadLandingPages(locale) {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'landingPages.json');
  if (!fs.existsSync(filePath)) return [];

  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default function LandingPage({ landing }) {
  return (
    <>
      <MetaDecorator
        title={landing.meta.title}
        description={landing.meta.description}
        url={landing.url}
        type="website"
      />
      <main>
        <div className={`${styles.bgDarkBlue} ${styles.booking}`}>
          <LandingPageRenderer landing={landing} />
        </div>
      </main>
    </>
  );
}

export const getStaticPaths = async () => {
  const locales = ['es', 'en'];
  const allLandingPages = locales.flatMap((locale) => loadLandingPages(locale));
  const slugs = Array.from(new Set(allLandingPages.map((item) => item.slug)));

  return {
    paths: locales.flatMap((locale) =>
      slugs.map((slug) => ({ params: { slug }, locale }))
    ),
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const landingPages = loadLandingPages(locale);
  const landing = landingPages.find((item) => item.slug === params.slug);

  if (!landing) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      landing,
      ...(await serverSideTranslations(locale, ['layout', 'form'])),
    },
    revalidate: 60,
  };
};
