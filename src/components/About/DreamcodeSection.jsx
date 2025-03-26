import React from "react";
import styles from "./about.module.css";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from "@/components/UI/Containers/ContainerSection";


const DreamcodeSection = () => {

  const { t } = useTranslation('about');


  return (
    <ContainerSection>
      <div className="mb_70">
        <h2 className="m_color f_700 f-lg-40 text-lg-start text-center ">{t('title_birth')}</h2>
        <p className="p_color w-lg-75 f-lg-18 text-lg-start text-center ">{t('description_birth')}</p>
      </div>
      <div className="w_color position-relative">
        <div className={`${styles.first_row} row position-relative`}>
          <div className="p-0 col-md-5">   
            <ContainerCircule className={styles.imageBox}>
              <Image
                src="/img/great-place/entorno-formidable.jpg"
                width={600}
                height={500}
                alt="Office"
                className="img-fluid position-relative z-index-9"
              />
            </ContainerCircule>
          </div>
          <div className="p-0 col-md-7 d-flex align-items-center">
            <p className="f_500 f-lg-18 w_color">
              {t('offices_text')}
            </p>
          </div>
        </div>
        <div className={`${styles.second_row} row position-relative`}>
          <div className="p-0 col-md-7 d-flex align-items-center">
            <p className="f_500 f-lg-18 w_color">
              {t('talent_human')}
            </p>
          </div>
          <div className="p-0 col-md-5">
            <ContainerCircule className={`${styles.imageBox}`}>
            <Image
                src="/img/about/desde-el-inicio.jpg"
                width={600}
                height={500}
                alt="Office"
                className="img-fluid position-relative z-index-9"
              />
            </ContainerCircule>
          </div>
        </div>
      </div>
    </ContainerSection>
  );
};

export default DreamcodeSection;
