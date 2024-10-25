import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import styles from './menu.module.css'

export default function MenuButtons() {

    const { i18n } = useTranslation();
    const locale = i18n.language;

    return (
        <ul className="navbar-nav flex-direction-row justify-content-center">
            <li className="nav-item">
              <Link href="/blog" className={`nav-link ${styles.btn_get}`}>
                DreamBlog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/careers" className={`nav-link ${styles.btn_get}`}>
                {locale === 'en' ? 'Careers' : 'Carreras'}
              </Link>
            </li>
        </ul> 
    )
  }
  