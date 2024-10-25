import { BiSun, BiMoon } from "react-icons/bi";
import style from './menu.module.css';
import { useContext } from 'react';
import { ThemeContext } from "@/pages/_app"; 

export default function ThemeSwitch() {

    // Gestion theme dark
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        
        <ul className="navbar-nav">
            <li className="nav-item dropdown">
                <button onClick={toggleTheme} className={style.btn_dark_mode}>
                {theme ?  <BiSun /> : <BiMoon /> }
                </button> 
            </li>
        </ul>

    )
  }
  