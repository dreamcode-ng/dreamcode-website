import React from "react";
import styles from "./card.module.css";
import AnimationUse from "@/assets/animations/AnimationUse";

const SolutionsCardItem = ({ title, description, animationName, withAnimation = false }) => {

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div  className={`${styles.card} border-gradient text-white my-3 position-relative`}>
        <div className={`${styles.cardBody } `}>
          <h2 className=" mb-3 f-lg-20 f_600">{title}</h2>
          <p className=" text-start f-lg-14">
            {description}
          </p>
         {
            withAnimation && 
          <div className={styles.icon}>
            <AnimationUse animationName={animationName} />
          </div>
         } 
        </div>
      </div>
    </div>
  );
}
export default SolutionsCardItem;