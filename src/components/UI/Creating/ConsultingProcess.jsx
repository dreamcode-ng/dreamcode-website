import React from "react";
import style from "./recicly.module.css";
import { StarIcon } from "@/assets/iconos/svgCall";
import { BoxContainer, BoxChild } from "@/components/UI/Common/Common";
import ContainerSection from "@/components/UI/Containers/ContainerSection";

function StepItem({ number, title, description, withNumber = false }) {
  return (
    <BoxChild className="gap-3 d-flex flex-column">
      <div className={`${style.icon} d-flex align-items-center gap-2`}>
        {withNumber && <div className="p-3 w_color">{number}</div>}
        <h3 className="w_color f-lg-20 m-0">{title}</h3>
      </div>
      <p className="text-start f-lg-15 p_color">{description}</p>
    </BoxChild>
  );
}

export default function ConsultingProcess({ withNumber = false , subtile, title}) {
  let description =
    "Comenzamos con un análisis integral del estado actual de tu empresa, identificando áreas clave de mejora y posibles desafíos. Con esta información, diseñamos una estrategia que conecta la tecnología con los objetivos de tu negocio.";

  return (
    <ContainerSection>
      <div className={`${style.consulting_process} position-relative`}>
        <div className="container">
          <div className="row flex-sm-column-reverse flex-lg-row">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="text-start mb-3 mt-5">
                <StarIcon />
                <h2 className="mt-3 m_color text-start">{title}</h2>
                {!withNumber && <p className="f_700 w_color">{subtile}</p>}
              </div>
            </div>
            <div className={`col-lg-8 col-md-12 col-sm-12`}>
              <div className={`${style.consulting_content} box_shadow`}>
                <BoxContainer>
                  <StepItem number="1" title="Planificación estratégica" description={description} withNumber={withNumber} />
                  <StepItem number="2" title="Análisis de procesos" description={description} withNumber={withNumber} />
                </BoxContainer>
                <BoxContainer className={style.talent_box}>
                  <StepItem number="3" title="Desarrollo de soluciones" description={description} withNumber={withNumber} />
                  <StepItem number="4" title="Implementación y seguimiento" description={description} withNumber={withNumber} />
                </BoxContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerSection>
  );
}
