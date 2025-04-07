import styles from './card.module.css';
import { FaLocationDot } from "react-icons/fa6";
import { BiWifi } from "react-icons/bi";
import listJobsEn from '@/assets/jobs/enJobs.json';
import listJobsEs from '@/assets/jobs/esJobs.json';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';


function CardItem ({ name, link, experts, modality , years, location}) {

	  const { t } = useTranslation('careers');


	
  	return (
    		<div className={`${styles.card} g-col-6`}>
      			<div className="d-flex w-100 flex-column align-items-start justify-content-start gap-3 ">
          					<div className={styles.frameParent}>
            						<div className={styles.textParent}>
              							<div className="w_color f_500 position-relative">{modality === true ? ' Remote' : ' Presencial'}</div>
              							<BiWifi />
            						</div>
            						<div className={styles.button}>
										<FaLocationDot />
              							<div className="w_color f_500 position-relative">{location}</div>
            						</div>
          					</div>
          					<div className={styles.heading}>{name}</div>
        				<div className={styles.paragraph}>
							<p className='w_color f_800 f-lg-18'><FaPlus /> {years}</p>
							<ul className='list-unstyled '>
							{
								experts.map((item, i) =>{
								return (
									<li key={i} className='d-flex align-items-center p_color f-lg-15 ms-3'>- {item}</li>
								)
								})
							}   
							</ul>
        				</div>
						<div className={styles.button1}>
								<Link href={link} className="d_color f_500 position-relative">{t('btn_apply')}</Link>
						</div>
      			</div>
    		</div>);
};

export default function CardJobs() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
	const listJob = lang === 'es' ? listJobsEs : listJobsEn;
	
	return (
		<>		
			<div className={`${styles.cardContent} d-grid grid text-center gap-4`}>		
				{
					listJob.map((job) => (
						<CardItem key={job.id}
							years={job.years}
							location={job.location}
							modality={job.remote}
							link={`/careers/${job.url}`}
							name={job.name} 
							experts={job.experts}/>
					))
				}
			</div>	
		</>
	)
}