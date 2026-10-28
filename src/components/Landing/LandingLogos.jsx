import Image from 'next/image';
import styles from './landingPage.module.css';

export default function LandingLogos({ classDiv }) {
  return (
    <div className={`align-items-center ${styles.logos} ${classDiv || ''}`}>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-target.png" alt="Logo Client Target" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-square-trade.png" alt="Logo Client Square Trade" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-falabella.png" alt="Logo Client Falabella" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-pycca.png" alt="Logo Client Pycca" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-sequoia.png" alt="Logo Client Sequoia" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-bolivar.png" alt="Logo Client Bolivar" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-listo-seguro.png" alt="Logo Client Listo Seguro" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-movizzon.png" alt="Logo Client Movizzon" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-phonecheck.png" alt="Logo Client Phonecheck" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-miraclon.png" alt="Logo Client Miraclon" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-global-networks.png" alt="Logo Client Global Networks" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
      <div className={`logos ${styles.logosItem}`}>
        <figure className={`imgClients ${styles.logosFigure}`}>
          <Image src="/img/clients/logo-auxis.png" alt="Logo Client Auxis" width={120} height={60} loading="lazy" className={styles.logosImage} />
        </figure>
      </div>
    </div>
  );
}