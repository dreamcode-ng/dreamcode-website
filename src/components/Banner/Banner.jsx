import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '@/components/Banner/banner.module.css'
import Lottie from "lottie-react";
import animationDreamcode from "@/assets/animations/animation-dreamcode.json";

const StaffAugmentationCard = () => {
  return (
    <>
    <div className={`${styles.cardd} text-white my-3`}>
    <div className={` card-body pt-5 ps-5 pe-3`}>
        <h2 className="card-title mb-3 f-lg-25 f_600">Staff Augmentation</h2>
        <p className="card-text text-start f-lg-18">
          Amplia la capacidad de tu equipo con <span className="fw-medium text-secondary">talento experto</span>.
        </p>
        <div>

        <Lottie animationData={animationDreamcode} />
        </div>
      </div>
    </div>


    </>
  );
};

export default StaffAugmentationCard; 