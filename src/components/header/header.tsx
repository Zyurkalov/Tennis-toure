import { FC } from "react";
import logo from '../../logo/Logo.svg'
import styles from "./header.module.scss";

import { useAppDispatch } from '../../utilits';
// import { useEffect } from "react";
import { toggleMenu } from "../../services/actions";
import { ScreenType } from "../../utilits/hooks/useWindowSize";
import clsx from "clsx";

// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '../../assets/MenuLogo';
// import MenuIcon from '@mui/icons-material/Menu';

const Header: FC<{sizeWindows: string}> = ({sizeWindows}) => {
  const dispatch = useAppDispatch();
  // const statusMenu = useAppSelector(state => state?.menu);

  const click = () => {
    dispatch(toggleMenu())
  }

  const createScreenStyle = (styleName: string) => {
    return sizeWindows === ScreenType.mobile ? styles[styleName +'_mobile']
      : sizeWindows === ScreenType.tablet ? styles[styleName +'_tablet']
      : styles[styleName +'_desktop']
  }

  // useEffect(() => {
  //   console.log(statusMenu.menu); 
  // }, [statusMenu.menu]);

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
