import LandingHero from './LandingHero';
import LandingBestDev from './LandingBestDev';
import LandingServices from './LandingServices';
import LandingBannerAction from './LandingBannerAction';
import LandingVideo from './LandingVideo';
import LandingForm from './LandingForm';
import LandingHorizonScene from './LandingHorizonScene';

const sectionComponents = {
  hero: LandingHero,
  bestDev: LandingBestDev,
  services: LandingServices,
  bannerAction: LandingBannerAction,
  video: LandingVideo,
  form: LandingForm,
};

export default function LandingPageRenderer({ landing }) {
  return (
    <>
      {landing.sections.map((section, index) => {
        const SectionComponent = sectionComponents[section.type];
        if (!SectionComponent) return null;

        const content = <SectionComponent key={`${section.type}-${index}`} data={section} landing={landing} />;

        if (section.type === 'hero' && section.useHorizonScene) {
          return <LandingHorizonScene key={`${section.type}-${index}`}>{content}</LandingHorizonScene>;
        }

        return content;
      })}
    </>
  );
}
