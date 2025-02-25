"use client";
import React from "react";
import styles from "@/components/SolutionsCard/card.module.css";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Carga dinámica de Lottie para que solo se importe en el cliente
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Importación de la animación
import animationDreamcode from "@/assets/animations/animation-dreamcode.json";

const SolutionsCard = ({ title, description }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Solo se ejecuta una vez
    threshold: 0.3, // Se activa cuando el 30% del componente es visible
  });

  return (
    <div ref={ref} className={`${styles.card} text-white my-3`}>
      <div className="card-body pt-5 ps-5 pe-3">
        <h2 className="card-title mb-3 f-lg-25 f_600">{title}</h2>
        <p className="card-text text-start f-lg-18">
          Amplía la capacidad de tu equipo con{" "}
          <span className="fw-medium text-secondary">talento experto</span>.
        </p>
        <div className={styles.icon}>
          {/* Solo carga Lottie cuando el componente es visible */}
          {inView && <Lottie animationData={animationDreamcode} />}
        </div>
      </div>
    </div>
  );
};

export default SolutionsCard;
