import { useContext } from "react";
import { useAppDispatch } from '../../utilits';
import { toggleMenu } from "../../services/actions";
import { ScreenType } from "../../utilits/hooks/useWindowSize";
import { MainContext } from "../../page/Main/mainContext";
import clsx from "clsx";

import logo from '../../logo/Logo.svg'
import MenuIcon from '../../assets/MenuLogo';
import styles from "./header.module.scss";

const Header = () => {
  const dataContext = useContext(MainContext);
  const dispatch = useAppDispatch();

  const click = () => {
    dispatch(toggleMenu())
  }

  const createScreenStyle = (styleName: string) => {
    return dataContext.screen === ScreenType.mobile ? styles[styleName +'_mobile']
      : dataContext.screen === ScreenType.tablet ? styles[styleName +'_tablet']
      : styles[styleName +'_desktop']
  }

  return (
    <nav className={clsx(styles.header, createScreenStyle('header'))}>
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
