import { AccordionSection } from '@/components/UI/Accordion/Accordion';
import ContainerSection from '@/components/UI/Containers/ContainerSection';
import styles from './landingPage.module.css';

export default function LandingServices({ data }) {
  if (!data.services?.length) return null;

  return (

    <div className={styles.servicesSection}>
      <div class="container">
        <ContainerSection>
          <AccordionSection title={data.title} items={data.services} />
          {data.ctaText && data.ctaHref && (
            <div className="text-center mt-4">
              <a href={data.ctaHref} className={styles.heroButton}>
                {data.ctaText}
              </a>
            </div>
          )}
        </ContainerSection>
      </div>
    </div>
  
  );
}
