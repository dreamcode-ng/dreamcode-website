import NeetoCalEmbed from './NeetoCalEmbed';
import { useTranslation } from 'react-i18next';
import styles from './landingPage.module.css';

export default function LandingLeadCapture({ data }) {
  const { t } = useTranslation('form');

  const formTitle = data?.title || t('form_title');

  return (
    <section className="sec--area mt-5 form-booking" id="scheduleSection">
      <div className="container">
    <div className={`row ${styles.formBookingRow}`}>
          <div className={`col-lg-4 ${styles.formBookingCol1}`}>
            <h3 className="w_color f-lg-50 f_600">{formTitle}</h3>
            <p className="w_color">info@dreamcodesoft.com</p>
          </div>
          <div className={`col-lg-8 ${styles.formBookingCol2}`}>
            <div className={styles.dataForm}>
              <NeetoCalEmbed
                scriptUrl="https://dreamcodesoft.neetocal.com/javascript/embed.js"
                embedId="30b41c15-ba54-4a38-aa32-3960ebe73330"
                organization="dreamcodesoft"
                height="900px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
