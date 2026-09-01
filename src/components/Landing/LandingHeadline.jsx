import styles from './landingPage.module.css';

const ArrowIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
  </svg>
);

export default function LandingHeadline({ data }) {
  return (
    <section className={`sec_pad ${styles.headline}`}>
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="text-center">
          {data.preTitle && (
            <p className={`text-center p_color ${styles.headlinePretitle}`}>
              {data.preTitle}{' '}
              {data.preLinkText && (
                <a href={data.preLinkHref || data.buttonHref || '#scheduleSection'} className="w_color">
                  {data.preLinkText} <ArrowIcon />
                </a>
              )}
            </p>
          )}
          <h1 className={`${styles.headlineTitle} w_color text-center`}>
            {data.title}
          </h1>
          <h3 className={`${styles.headlineSubtitle} w_color`}>
            {data.subtitle}
          </h3>
          {data.buttonText && (
            <div className="text-center z-index-9 position-relative">
              <a href={data.buttonHref || '#scheduleSection'} className={styles.headlineButton}>
                {data.buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}