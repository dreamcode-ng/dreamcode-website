import { FaRegLightbulb, FaArrowRight } from 'react-icons/fa';
import LandingLogos from './LandingLogos';
import styles from './landingPage.module.css';

// Dynamic icon resolver: maps any react-icons library name to the component.
// Add new libraries here to extend support without touching the component.
import * as Fa from 'react-icons/fa';
import * as Md from 'react-icons/md';
import * as Lia from 'react-icons/lia';
import * as Io from 'react-icons/io';
import * as Io5 from 'react-icons/io5';
import * as Bs from 'react-icons/bs';
import * as Hi from 'react-icons/hi';
import * as Hi2 from 'react-icons/hi2';
import * as Ti from 'react-icons/ti';
import * as Vsc from 'react-icons/vsc';
import * as Ri from 'react-icons/ri';
import * as Si from 'react-icons/si';
import * as Go from 'react-icons/go';
import * as Gi from 'react-icons/gi';
import * as Lu from 'react-icons/lu';
import * as Tfi from 'react-icons/tfi';
import * as Ai from 'react-icons/ai';
import * as Gr from 'react-icons/gr';

const LIBRARY_MAP = {
  fa: Fa,
  md: Md,
  lia: Lia,
  io: Io,
  io5: Io5,
  bs: Bs,
  hi: Hi,
  hi2: Hi2,
  ti: Ti,
  vsc: Vsc,
  ri: Ri,
  si: Si,
  go: Go,
  gi: Gi,
  lu: Lu,
  tfi: Tfi,
  ai: Ai,
  gr: Gr,
};

function resolveIcon(iconName) {
  if (!iconName || typeof iconName !== 'string') return null;

  const match = iconName.match(/^([A-Z][a-z]+)(.*)$/);
  if (!match) return null;

  const [, libPrefix, iconSuffix] = match;
  const libKey = Object.keys(LIBRARY_MAP).find(
    (k) => k.toLowerCase() === libPrefix.toLowerCase()
  );
  if (!libKey) return null;

  const IconComponent = LIBRARY_MAP[libKey][iconName];
  return IconComponent || null;
}

function getIconComponent(iconName) {
  return resolveIcon(iconName) || null;
}

export default function LandingValueProps({ data }) {
  return (
    <section className={`bestdev sec--area ${styles.valuePropsSection}`}>
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
            const IconComponent = getIconComponent(item.icon);
            const Icon = IconComponent || FaRegLightbulb;
            return (
              <div key={item.title || index} className="col-6 col-md-6 col-lg-3 col-sm-6">
                <div className={`icons ${styles.valuePropsItem}`}>
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