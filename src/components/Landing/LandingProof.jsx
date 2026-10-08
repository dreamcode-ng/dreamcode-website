import styles from './landingPage.module.css';

export default function LandingProof({ data }) {
  return (
    <section className={`sec--area ${styles.proofSection}`}>
      <div className="container container-dc">
        <div className="text-center mb-5">
          <h2 className="w_color text-center f_700 f-lg-40 f-sm-25">{data.title}</h2>
          {data.description && (
            <p className="w_color text-left f_400 f-lg-20 f-sm-15 mt-3">
              {data.description}
            </p>
          )}
        </div>
        {data.videoIds?.length && (
          <div className="row align-items-center justify-content-center">
            {data.videoIds.map((videoId) => (
              <div key={videoId} className="col-lg-6">
                <div className="video_content mt-2">
                  <iframe
                    className={styles.proofFrame}
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
        )}
        {data.image && (
          <div className="row justify-content-center mt-2">
            <div className="col-lg-6">
              <img
                className={styles.proofImage}
                src={data.image}
                alt={data.title}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}