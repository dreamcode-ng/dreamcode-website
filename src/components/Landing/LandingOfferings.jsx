import { AccordionSection } from '@/components/UI/Accordion/Accordion';
import styles from './landingPage.module.css';

export default function LandingOfferings({ data }) {
  if (!data.services?.length) return null;

  return (

    <section className={`sec--area ${styles.offeringsSection}`}>
      <div className="container container-dc">
        <AccordionSection title={data.title} items={data.services} />
        {data.ctaText && data.ctaHref && (
          <div className="text-center mt-4">
            <a href={data.ctaHref} className={styles.headlineButton}>
              {data.ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}