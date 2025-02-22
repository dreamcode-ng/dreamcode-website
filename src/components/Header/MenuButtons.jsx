import Link from 'next/link';

export default function MenuButtons() {

    return (
      <div className="collapse sub-menu w-100" id="collapseExample">
          <div className="p-4 bg_secondary">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <Link className="nav-link w_color" href="/staff-augmentation">Staff Augmentation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/software-development">Desarrollo de software</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/systems-modernization">Modernización de sistemas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/database-management">Gestión de base de datos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link w_color" href="/it-consulting">Consultoria TI</Link>
              </li>
            </ul>
          </div>
      </div>
    )
  }
  