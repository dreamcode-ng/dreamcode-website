"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

// Carga diferida de Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Importa todas las animaciones
import animationDreamcode from "@/assets/animations/animacion-cubo.json";
import animationOne from "@/assets/animations/animation-one.json";
import animationTwo from "@/assets/animations/animation-two.json";
import animationThree from "@/assets/animations/animation-three.json";
import animationFour from "@/assets/animations/animation-four.json";
import animationFive from "@/assets/animations/animation-five.json";

// Mapeo de animaciones
const animations = {
  dreamcode: animationDreamcode,
  one: animationOne,
  two: animationTwo,
  three: animationThree,
  four: animationFour,
  five: animationFive,
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
