import { useAppDispatch, useAppSelector } from "../../../utilits";
import styles from "./menu.module.css"

const settingMenu = {

}

const test = useAppSelector(state => state?.menu.menu)

export const MenuList = () => {
    return (
        <menu className={styles.menu}>
            <ul>
                <li></li>
            </ul>
        </menu>
    )
}