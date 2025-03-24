import styles from './card.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { BiWifi } from "react-icons/bi";
import listJobsEn from '../../assets/jobs/enJobs.json';
import listJobsEs from '../../assets/jobs/esJobs.json';
import { useTranslation } from 'next-i18next';

function CardItem ({ name }) {
  	return (
    		<div className={`${styles.card} g-col-6`}>
      			<div className="d-flex w-100 flex-column align-items-start justify-content-start gap-3 ">
          					<div className={styles.frameParent}>
            						<div className={styles.textParent}>
              							<div className="w_color f_500 position-relative">Remoto</div>
              							<BiWifi />
            						</div>
            						<div className={styles.button}>
										<FaLocationDot />
              							<div className="w_color f_500 position-relative">Cali</div>
            						</div>
          					</div>
          					<div className={styles.heading}>{name}</div>
        				<div className={styles.paragraph}>
          					<p className={styles.experienciaEnReact2}>{`Experiencia en:React 2 años+  `}</p>
          					<p className={styles.git}>{`GIT `}</p>
          					<p className={styles.git}>Bases de datos relacionales y no relacionales</p>
          					<p className={styles.git}>Pruebas A/B</p>
          					<p className={styles.git}>Principios CleanCode</p>
          					<p className={styles.git}>Metodologías ágiles</p>
        				</div>
						<div className={styles.button1}>
								<div className="d_color f_500 position-relative">Quiero aplicar</div>
						</div>
      			</div>
    		</div>);
};

export default function CardJobs() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
	const listJob = lang === 'en' ? listJobsEn : listJobsEs;
	
	return (
		<>		
			<div className={`${styles.cardContent} d-grid grid text-center gap-4`}>		
				{
					listJob.map((job) => (
						<CardItem key={job.id}
							name={job.name} />
					))
				}
			</div>	
		</>
	)
}