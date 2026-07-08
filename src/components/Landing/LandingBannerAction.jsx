import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { EffectFlip, Autoplay } from 'swiper/modules';
import styles from './landingPage.module.css';

function LandingSliderWords({ items }) {
  if (!items?.length) return null;

  return (
    <Swiper
      effect="flip"
      direction="vertical"
      autoplay={{ delay: 2500 }}
      modules={[EffectFlip, Autoplay]}
      className={styles.sliderWords}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <h3 className={`bg-dark w_color ${styles.sliderWord}`}>{item}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function LandingBannerAction({ data }) {
  return (
    <>
      <section className={`sec--area ${styles.bannerActionSection}`}>
        <div className="container">
          <div className="row d_flex align-items-center justify-content-center">
            {data.image && (
              <div className="col-lg-6">
                <figure className={styles.bannerActionImage}>
                  <img src={data.image} alt={data.title} width="100%" />
                </figure>
              </div>
            )}
            <div className={data.image ? 'col-lg-6' : 'col-lg-12'}>
              <h3 className="w_color f_700">{data.title}</h3>
              <p className="w_color f_400">{data.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bannerCtaSection}>
        <div className="container">
          <div className="row d_flex align-items-center justify-content-center">
            <div className="col-lg-8 text-left">
              <h3 className={`w_color ${styles.bannerCtaTitle}`}>{data.bannerBlue}</h3>
              <LandingSliderWords items={data.keywords} />
            </div>
            <div className={`col-lg-4 ${styles.btnAgendar}`}>
              <a href={data.buttonHref || '#Formulario'} className={styles.bannerCtaButton}>
                {data.buttonText || 'Book a consultation'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
