import LandingHeadline from './LandingHeadline';
import LandingValueProps from './LandingValueProps';
import LandingOfferings from './LandingOfferings';
import LandingPitch from './LandingPitch';
import LandingProof from './LandingProof';
import LandingLeadCapture from './LandingLeadCapture';
import LandingHorizonScene from './LandingHorizonScene';

const sectionComponents = {
  headline: LandingHeadline,
  valueProps: LandingValueProps,
  offerings: LandingOfferings,
  pitch: LandingPitch,
  proof: LandingProof,
  leadCapture: LandingLeadCapture,
};

export default function LandingPageRenderer({ landing }) {
  return (
    <>
      {landing.sections.map((section, index) => {
        const SectionComponent = sectionComponents[section.type];
        if (!SectionComponent) return null;

        const content = <SectionComponent key={`${section.type}-${index}`} data={section} landing={landing} />;

        if (section.type === 'headline' && section.useHorizonScene) {
          return <LandingHorizonScene key={`${section.type}-${index}`}>{content}</LandingHorizonScene>;
        }

        return content;
      })}
    </>
  );
}
