import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";

import styles from './styles.module.css'

export function Menu() {
    return  <>
        <div className={styles.menu}>
            <a href="#" className={styles.menuItem}><HouseIcon/></a>
            <a href="#" className={styles.menuItem}><HistoryIcon/></a>
            <a href="#" className={styles.menuItem}><SettingsIcon/></a>
            <a href="#" className={styles.menuItem}><SunIcon/></a>
        </div>
    
    </>
}