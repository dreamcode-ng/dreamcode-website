import styles from './landingPage.module.css';

export default function LandingDetails({ data }) {
  if (!data || !data.showDetailsSection) {
    return null;
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsInner}>
        <div className={styles.detailsHeader}>
          <div className={styles.detailsTitle}>{data.title}</div>
          <div className={styles.detailsDescription}>{data.description}</div>
        </div>
        <div className={styles.detailsBody}>
          {data.items?.map((item, index) => (
            <div key={item.title || index} className={styles.detailsCardWrapper}>
              <div className={styles.detailsCard}>
                <div className={styles.detailsCardHeader}>
                  <div className={styles.detailsCardTitle}>{item.title}</div>
                </div>
                <div className={styles.detailsCardBody}>
                  <div className={styles.detailsCardText}>{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}