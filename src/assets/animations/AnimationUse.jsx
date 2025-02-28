"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Carga diferida de Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Importa todas las animaciones
import animationCube from "@/assets/animations/animation-cube.json";
import animationCircle from "@/assets/animations/animation-circle.json";
import animationCode from "@/assets/animations/animation-code.json";
import animationData from "@/assets/animations/animation-data.json";
import animationGraphic from "@/assets/animations/animation-graphic.json";
import animationRocket from "@/assets/animations/animation-rocket.json";
import animationUsers from "@/assets/animations/animation-users.json";

// Mapeo de animaciones
const animations = {
  cube: animationCube,
  circle: animationCircle,
  code: animationCode,
  data: animationData,
  graphic: animationGraphic,
  rocket: animationRocket,
  users: animationUsers,
};

export default function AnimationUse({ animationName }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Se activa una sola vez
    threshold: 0.3, // Activa cuando el 30% del componente es visible
  });

  // Verifica si la animación existe en el mapeo
  const selectedAnimation = animations[animationName];

  return (
    <div ref={ref} className="icon">
      {inView && selectedAnimation && <Lottie animationData={selectedAnimation} />}
    </div>
  );
}
