import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function MenuLinks() {

    const { i18n } = useTranslation();
    const locale = i18n.language;

    return (
        <ul className="navbar-nav ms-auto me-3" id="menu">
            <li className="dropdown nav-item">
                <a className="nav-link dropdown-toggle" href="/staff-augmentation" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {locale === 'en' ? 'Solutions' : 'Soluciones'}
                </a>
                <ul className="-bg-section dropdown-menu">
                    <li>
                        <Link className="dropdown-item" title="Technological Service" href='/services'>
                            {locale === 'en' ? 'Technological Solutions' : 'Soluciones Tecnológicas'}
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item f_p" title="Staff Augmentation" href='/staff-augmentation'>
                            Staff Augmentation
                        </Link>
                    </li>
                </ul>
            </li>
            <li className="nav-item">
                <Link href="/about" className="nav-link">
                    {locale === 'en' ? 'About Us' : 'Acerca de'}
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/dreamcoders" className="nav-link">
                    DreamCoders
                </Link>
            </li>
        </ul>
    )
}
