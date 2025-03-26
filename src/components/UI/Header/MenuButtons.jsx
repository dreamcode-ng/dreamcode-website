import Link from 'next/link';
import { withTranslation } from 'react-i18next';


function MenuButtons({ t }) {

    return (
      <div className="collapse sub-menu w-100" id="collapseExample">
          <div className="p-4 -bg-secondary">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link w_color" href="/staff-augmentation">Staff Augmentation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/software-development">{t('software')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/systems-modernization">{t('modernization')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/database-management">{t('data')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/it-consulting">{t('consulting')}</Link>
              </li>
            </ul>
          </div>
      </div>
    )
}

export default withTranslation('layout')(MenuButtons);