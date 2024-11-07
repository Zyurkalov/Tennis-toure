import { FC } from "react";
import logo from '../../logo/Logo.svg'
import styles from "./header.module.css";

import { useAppDispatch, useAppSelector } from '../../utilits';
import { useEffect } from "react";
import { toggleMenu } from "../../services/actions";

// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const statusMenu = useAppSelector(state => state?.menu);

  const click = () => {
    dispatch(toggleMenu())
  }

  useEffect(() => {
    console.log(statusMenu.menu); 
  }, [statusMenu.menu]);

  return (
    <menu className={styles.menu}>
      <ul className={styles.header}>
        <li>
          <img className={styles.logo} src={logo} alt="логотип"></img>
        </li>
        <li >
          <button onClick={click}>
            <MenuIcon sx={{ fontSize: 40, color: "white"}} />
          </button>
          
        </li>
      </ul>
    </menu>
  );
};
export default Header;
