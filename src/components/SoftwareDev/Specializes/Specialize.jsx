import ContainerSection from '@/components/UI/Containers/ContainerSection';
import React from 'react';
import style from './specialize.module.css';
import { FaAndroid, FaApple, FaLaptopCode, FaCubes } from "react-icons/fa";
import { MdOutlineLanguage , MdAutoMode} from "react-icons/md";
import { ButtonIcon } from '@/components/UI/Buttons/Buttons';
import { useTranslation } from 'react-i18next';


const iconMap = {
  FaAndroid: FaAndroid,
  FaApple: FaApple,
  FaLaptopCode: FaLaptopCode,
  FaCubes: FaCubes,
  MdOutlineLanguage: MdOutlineLanguage,
  MdAutoMode: MdAutoMode
};

export default function Specialize( { title , data, btn }) {

  const { t } = useTranslation('software');


  return (
    <ContainerSection>
                <div className='mb-5'>
                    <h2 className='text-center f-lg-35 m_color f_800'>{title}</h2>
                </div>
                <div className="container my-2">
                    <div className='row justify-content-center'>
                    {
                      data.map((item, index) => (
                        <SpecializeItem
                          key={index}
                          title={item.title}
                          paragraph_one={item.paragraph_one}
                          paragraph_two={item.paragraph_two}
                          icons={item.icons.map((icon) => iconMap[icon])} 
                        />
                    ))}
                    </div>
                </div>
                <ButtonIcon text={btn} link="/" className="align-items-center mt-5"/>
    </ContainerSection>
  )
}

function SpecializeItem({ title, paragraph_one, paragraph_two, icons = [] }) {

  const { t } = useTranslation('software');

  
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div  className={`${style.specializeItem} gap-3 w-100 h-lg-auto`}>
          <h3 className="w_color f-lg-20 f_500">{title}</h3>
  
          <div className={style.specializeTags} >
            {icons.map((Icon, index) => (
              <div key={index} className="-bg-secondary d-flex">
                <div className="text-center p_color f_300 f-lg-12">
                  <Icon />
                </div>
              </div>
            ))}
          </div>
  
          <div>
            <p className="f-lg-14">{paragraph_one}</p>
            <p className="my-3 m_color f_700">{t('we_achieved')}</p>
            <p className="f-lg-14">{paragraph_two}</p>
          </div>
        </div>
      </div>
    );
}
  
