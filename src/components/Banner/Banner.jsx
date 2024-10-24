import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '@/components/Banner/banner.module.css'

function Banner() {

    const { t } = useTranslation();

  return (
    <div className={styles.banner}>
      <p className='text-center'>{t('footer.privacy_policy')}</p>
    </div>
  )
}

export default Banner; 