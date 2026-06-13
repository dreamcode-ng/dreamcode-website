import styles from './landingPage.module.css';

const clientLogos = [
  'falabella',
  'listo-seguro',
  'bolivar',
  'arity',
  'pycca',
  'global-networks',
  'phonecheck',
  'square-trade',
  'target',
  'movizzon',
  'constructora-bolivar',
];

export default function LandingLogos() {
  return (
    <div className="align-items-center logos-container">
      {clientLogos.map((logo) => (
        <div key={logo} className={`${styles.logoItem} logos`}>
          <figure className="imgClients">
            <img
              src={`/img/clients/logo-${logo}.png`}
              alt={`Client logo ${logo}`}
              title={`Logo ${logo}`}
              width="200"
              height="80"
              loading="lazy"
              className={styles.logoImage}
            />
          </figure>
        </div>
      ))}
    </div>
  );
}
