import React from 'react';
import SolutionsCardItem from '@/components/UI/SolutionsCard/Card';
import ContainerSection from '@/components/UI/Containers/ContainerSection'


function StrategicAdvantages({ title , data}) {


  return (
    <ContainerSection>
        <div className="row justify-content-center">
            <h2 className='w_color text-center display-5 f_700 pb-5'>{title}</h2>
            {
                data.map((item, index) => (
                    <SolutionsCardItem 
                        key={index}
                        title={item.title}
                        description={item.description} />
                ))
            }
        </div>
    </ContainerSection>
  )
}

export default StrategicAdvantages;