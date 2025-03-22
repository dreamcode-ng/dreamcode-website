import React from 'react';
import SolutionsCardItem from '@/components/UI/SolutionsCard/Card';
import ContainerSection from '@/components/UI/Containers/ContainerSection'
import { useTranslation } from 'next-i18next';


function ServicesHome() {

  const { t } = useTranslation('home');
  const serviceslist = t('solutions', { returnObjects: true }) 
  

  return (
    <ContainerSection>
        <div className="row justify-content-center">
            <h2 className='w_color text-center display-2 f_700 pb-5'>{t('our_solution')}</h2>
            {
                serviceslist.map((item, i ) => (
                    <SolutionsCardItem
                    key={i}
                    withAnimation 
                    title={item.title}
                    description={item.description}
                    animationName={item.icon} />
                ))
            }
        </div>
    </ContainerSection>
  )
}

export default ServicesHome;