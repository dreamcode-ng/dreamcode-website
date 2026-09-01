import styles from './landingPage.module.css';

export default function LandingDetails({ data }) {
  if (!data || !data.showDetailsSection) {
    return null;
  }

  return (
<section className={`sec--area ${styles.detailsContainer}`}>
      <div className="container container-dc">
        <div className="mb-5">
          <h2 className="w_color f_700 text-center mb-4">{data.title}</h2>
          {data.description && (
            <p className={`w_color text-center f-lg-20 ${styles.detailsDescription}`}>{data.description}</p>
          )}
        </div>
        <div className={`row justify-content-center ${styles.detailsBody}`}>
          {data.items?.map((item, index) => (
            <div key={item.title || index} className="col-12 col-md-8 col-lg-6 d-flex justify-content-center">
              <div className={styles.detailsCard}>
                <h3 className={styles.detailsCardTitle}>{item.title}</h3>
                <p className={styles.detailsCardText}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}