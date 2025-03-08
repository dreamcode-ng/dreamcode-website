import React from "react";
import styles from "./card.module.css";
import AnimationUse from "@/assets/animations/AnimationUse";

const SolutionsCard = ({ title, description, animationName }) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div  className={`${styles.card} border-gradient text-white my-3`}>
        <div className={`${styles.cardBody } `}>
          <h2 className=" mb-3 f-lg-25 f_600">{title}</h2>
          <p className=" text-start f-lg-14">
            {description}
          </p>
          <div className={styles.icon}>
            <AnimationUse animationName={animationName} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SolutionsCard;