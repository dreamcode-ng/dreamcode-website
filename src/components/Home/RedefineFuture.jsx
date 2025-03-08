import React from "react";
import Link from 'next/link';
import style from "@/components/Home/home.module.css";
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from '@/components/UI/Containers/ContainerSection'

const RedefineFuture = () => {
  return (
    <ContainerSection>
      <ContainerCircule className={style.redefine}>
        <div className="d-flex flex-column align-items-center justify-content-center gap-3 ">
          <div className="text-center f-lg-40 m_color mb-3">
            <h2> <span className="fw-bold">Redefinimos </span>
              el futuro de los negocios a <br></br>través de la tecnología
            </h2>
          </div>
          <div className="">
              <p className="w_color fs-5">
                <Link href='/about' className='w_color'>Contáctanos →</Link></p>
          </div>
        </div>
      </ContainerCircule>    
    </ContainerSection>
  );
};

export default RedefineFuture;
