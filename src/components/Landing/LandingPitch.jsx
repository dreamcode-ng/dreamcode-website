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
      className={styles.pitchSlider}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <h3 className={`bg-dark w_color ${styles.pitchSliderWord}`}>{item}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function LandingPitch({ data }) {
  return (
    <>
      {data.showExperienceSection && (
        <section className={`sec--area ${styles.pitchSection}`}>
          <div className="container container-dc">
            <div className="row d_flex align-items-center justify-content-center">
              {data.image && (
                <div className="col-lg-6">
                  <figure className={styles.pitchImage}>
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
      )}

      <section className={styles.pitchCtaSection}>
        <div className="container container-dc">
          <div className="row d_flex align-items-center justify-content-center">
            <div className="col-lg-8 text-left">
              <h3 className={`w_color ${styles.pitchCtaTitle}`}>{data.bannerBlue}</h3>
              {data.bannerParagraph && (
                <p className="w_color f_400">{data.bannerParagraph}</p>
              )}
              <LandingSliderWords items={data.keywords} />
            </div>
            {data.showButton && (
              <div className={`col-lg-4 ${styles.pitchCta}`}>
                <a href={data.buttonHref || '#Formulario'} className={styles.pitchCtaButton}>
                  {data.buttonText || 'Book a consultation'}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}