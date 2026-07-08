import React from "react";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import style from "@/components/Home/home.module.css";
import ContainerCircule from "@/components/UI/Containers/ContainersCircule";
import ContainerSection from '@/components/UI/Containers/ContainerSection'

const RedefineFuture = () => {

  const { t } = useTranslation('home');

  return (
    <ContainerSection>
      <ContainerCircule className={style.redefine}>
        <div className="d-flex line-break flex-column align-items-center justify-content-center gap-3 line-break">
          <div className="text-center f-lg-40 m_color mb-3">
            <h2> <span className="fw-bold">{t('redefine1')} </span>
              {t('redefine2')}
            </h2>
          </div>
          <div className="">
              <p className="w_color fs-5">
                <Link href='/contact#form-primary' className='w_color'>{t('btn_banner')} →</Link></p>
          </div>
        </div>
      </ContainerCircule>    
    </ContainerSection>
  );
};

export default RedefineFuture;
