import { useAppSelector } from '../../utilits'
import { useEffect, useState } from 'react'
import MenuIcon from '../../assets/MenuLogo';
import ArrowForwardIcon from '../../assets/ArrowForwardIcon';
import ContentPasteIcon from '../../assets/ContentPasteIcon';
import { toggleMenu } from "../../services/actions";
import logo from '../../logo/Logo.svg';
import styles from './sideMenu.module.scss'
import clsx from 'clsx'
import { useAppDispatch } from '../../utilits';

export const SideMenu = () => {
    const statusMenu = useAppSelector(state => state?.menu)
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const dispatch = useAppDispatch()
    const eventDisable = (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()
    const click = () => {
        dispatch(toggleMenu())
      }

    useEffect(() => {
        if(statusMenu.menu) {
        const timer = setTimeout(() => {
            setIsMenuVisible(true);
        }, 100);

        return () => clearTimeout(timer);
        }
        else {
         const timer = setTimeout(() => {
             setIsMenuVisible(false);
          }, 0);

         return () => clearTimeout(timer);
        }
    }, [statusMenu.menu]);


    return (
      <div
        className={`${styles.menuContainer} ${
          statusMenu.menu && styles.menuContainer_background
        }`}
      >
        <nav
          className={clsx(styles.menu, isMenuVisible && styles.menu_transition)}
        >
          <header className={styles.menu__header}>
            <img className={styles.menu__logo} src={logo} alt="меню" />

            <button
              className={styles.menu__burgerMenu}
              onClick={() => {
                click();
              }}
            >
              <MenuIcon sx={{ fontSize: 40, color: "#3D5138" }} />
            </button>
          </header>
          <ul className={styles.menu__ul}>
            <li className={styles.menu__li}>
              <a className={styles.menu__link} href="/" onClick={(e) => eventDisable(e)}>
                Профиль
              </a>
              <ArrowForwardIcon sx={{ fontSize: 45 }} />
            </li>
            <li className={styles.menu__li}>
              <a className={styles.menu__link} href="/" onClick={(e) => eventDisable(e)}>
                Расписание
              </a>
              <ArrowForwardIcon sx={{ fontSize: 45 }} />
            </li>
            <li className={`${styles.menu__li} ${styles.menu__li_padding}`}>
              <a className={styles.menu__link} href="/" onClick={(e) => eventDisable(e)}>
                Открыть матч
              </a>
              <ContentPasteIcon sx={{ fontSize: 35 }} />
            </li>
            <li className={styles.menu__li}>
              <button
                className={styles.menu__buttonClose}
                onClick={() => {
                  click();
                }}
              >
                Выйти
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
}