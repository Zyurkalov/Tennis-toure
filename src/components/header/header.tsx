import { useAppDispatch } from '../../utilits';
import { toggleMenu } from "../../services/actions";
import { useScreenStyle } from "../../utilits/hooks/useScreenStyle";
import clsx from "clsx";

import logo from '../../logo/Logo.svg'
import MenuIcon from '../../assets/MenuLogo';
import styles from "./header.module.scss";

const Header = () => {
  const dispatch = useAppDispatch();

  const click = () => {
    dispatch(toggleMenu())
  }

  return (
    <nav className={clsx(styles.header, useScreenStyle(styles, 'header'))}>
        <div className={styles.header__container}>
          <img className={styles.header__logo} src={logo} alt="логотип"></img>
        </div>
          <button className={styles.header__button} onClick={click}>
            <MenuIcon sx={{ fontSize: 40, color: "white"}} />
          </button>
    </nav>
  );
};
export default Header;
