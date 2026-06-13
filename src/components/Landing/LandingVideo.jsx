import ContainerSection from '@/components/UI/Containers/ContainerSection';
import styles from './landingPage.module.css';

export default function LandingVideo({ data }) {
  if (!data.videoIds?.length) return null;

  return (
    <section className={styles.videoSection}>
      <ContainerSection>
        <div className="text-center mb-5">
          <h2 className="f-lg-40 f-sm-25 w_color">{data.title}</h2>
        </div>
        <div className={styles.videoGrid}>
          {data.videoIds.map((videoId) => (
            <div key={videoId} className={styles.videoWrapper}>
              <iframe
                className={styles.videoFrame}
                src={`https://www.youtube.com/embed/${videoId}`}
                title={data.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </ContainerSection>
    </section>
  );
}
