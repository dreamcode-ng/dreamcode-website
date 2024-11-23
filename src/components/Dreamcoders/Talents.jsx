import React from 'react'
import { useTranslation } from 'next-i18next';
function Talents() {

const { t } = useTranslation('home');
    
  return (
    <div>
        Talents
        <p>{t('meta_datos.meta_title_Home')}</p>
    </div>
  )
}

export default Talents;