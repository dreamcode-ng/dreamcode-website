import styles from './landingPage.module.css';

export default function LandingLogos({ classDiv }) {
  return (
    <div className={`align-items-center ${styles.logos} ${classDiv || ''}`}>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-target.png" alt="Logo Client Target" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-square-trade.png" alt="Logo Client Square Trade" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-falabella.png" alt="Logo Client Falabella" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-pycca.png" alt="Logo Client Pycca" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-sequoia.png" alt="Logo Client Sequoia" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-bolivar.png" alt="Logo Client Bolivar" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-listo-seguro.png" alt="Logo Client Listo Seguro" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-movizzon.png" alt="Logo Client Movizzon" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-phonecheck.png" alt="Logo Client Phonecheck" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-miraclon.png" alt="Logo Client Miraclon" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-global-networks.png" alt="Logo Client Global Networks" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <img src="/img/clients/logo-auxis.png" alt="Logo Client Auxis" loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
    </div>
  );
}