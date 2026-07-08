import ContainerSection from '@/components/UI/Containers/ContainerSection';
import styles from './landingPage.module.css';

export default function LandingVideo({ data }) {
  if (!data.videoIds?.length) return null;

  return (
    <section className={styles.videoSection}>
      <ContainerSection>
        <div className="text-center mb-5">
          <h2 className="w_color text-center f_700 f-lg-40 f-sm-25">{data.title}</h2>
        </div>
        <div className="row align-items-center justify-content-center">
          {data.videoIds.map((videoId) => (
            <div key={videoId} className="col-lg-6">
              <div className="video_content mt-2">
                <iframe
                  className={styles.videoFrame}
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={data.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  width="100%"
                  height="360"
                />
              </div>
            </div>
          ))}
        </div>
      </ContainerSection>
    </section>
  );
}
