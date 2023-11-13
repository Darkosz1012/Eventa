import { AuthTabs } from "../AuthTabs"
import styles from "./AuthPanel.module.scss"
import logo from "@assets/img/logotran.png"


function AuthPanel() {
    return (
        <div className={styles.authPanel} >
            <img src={logo} alt="eventa" className={styles.logo}/>
            <AuthTabs/>
        </div>
    )
}

export default AuthPanel