import { FaRegLightbulb, FaCode, FaArrowRight, FaDesktop, FaMobileAlt, FaCloud, FaShieldAlt } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';
import { LiaToolsSolid } from 'react-icons/lia';
import LandingLogos from './LandingLogos';
import styles from './landingPage.module.css';

const iconComponents = {
  FaRegLightbulb,
  FaCode,
  MdOutlineDesignServices,
  LiaToolsSolid,
  FaDesktop,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
};


export default function LandingBestDev({ data }) {
  return (
    <section className={`bestdev sec--area ${styles.bestDevSection}`}>
      <div className="container">
        <div className="mb-5 text-center">
          <h2 className="line-break w_color f_700 z-index99 text-center">{data.title}</h2>
          {data.subtitle && (
            <p className="f-lg-20 pt-3 pb-5 w_color text-center">
              {data.subtitle}
              {data.ctaHref && data.ctaText && (
                <>
                  {' '}
                  <a href={data.ctaHref} className="f_700 m_color">
                    {data.ctaText} <FaArrowRight />
                  </a>
                </>
              )}
            </p>
          )}
        </div>

        <div className="row">
          {data.items?.map((item, index) => {
            const Icon = iconComponents[item.icon] || FaRegLightbulb;
            return (
              <div key={item.title || index} className="col-6 col-md-6 col-lg-3 col-sm-6">
                <div className={`icons ${styles.bestDevItem}`}>
                  <div className="bg-white text-center">
                    <Icon size="100%" />
                  </div>
                  <h3 className="text-center w_color">{item.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {data.customersTitle && (
          <>
            <div className="text-center mt-5">
              <p className="w_color f-lg-20">{data.customersTitle}</p>
            </div>
            <LandingLogos />
          </>
        )}
      </div>
    </section>
  );
}
