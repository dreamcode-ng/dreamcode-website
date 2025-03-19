import React from "react";
import styles from "./about.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from "@/components/UI/Containers/ContainerSection";


const DreamcodeSection = () => {
  return (
    <ContainerSection>
      <div className="mb_70">
        <h2 className="m_color f_700 f-lg-40">Desde el 2013</h2>
        <p className="p_color w-75 f-lg-18">Nacimos en Cali Colombia como una empresa enfocada en el desarrollo de software y otros servicios en tecnología bajo la modalidad nearshore, somos la fuerza humana que impulsa la transformación y el crecimiento tecnológico de las compañías.</p>
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
            <p className="f_500 f-lg-18">
              Hoy contamos con oficinas en Miami Estados Unidos, Bogotá y Cali
              Colombia
            </p>
          </div>
        </div>
        <div className={`${styles.second_row} row position-relative`}>
          <div className="p-0 col-md-7 d-flex align-items-center">
            <p className="f_500 f-lg-18">
              Desde el inicio hemos promovido el crecimiento exponencial de
              nuestro equipo, empezamos con 6 soñadores, hoy somos más de 100
              DreamCoders soñando y transformando el futuro.
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
