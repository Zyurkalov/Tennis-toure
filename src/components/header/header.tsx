import { FC } from "react";
import logo from '../../logo/Logo.svg'
import styles from "./header.module.css";

import AccountBoxIcon from '@mui/icons-material/AccountBox';

const Header: FC = () => {
  return (
    <div className={`${styles.header}`}>
      <img className={styles.logo} src={logo} alt="логотип"></img>
      <AccountBoxIcon sx={{ fontSize: 40, color: "white" }} />
    </div>
  );
};
export default Header;
