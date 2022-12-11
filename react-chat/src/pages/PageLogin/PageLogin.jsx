import kek from "../../images/kek.jpeg"

import styles from './PageLogin.module.scss'

export function PageLogin(props) {
    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginContainer}>
                <img className={styles.logo} src={kek} alt="lol" />
                <a className={styles.buttonLogin} href="http://localhost:8000/social-auth/login/google-oauth2/" style={{ textDecoration: 'none', color: '#333' }} onClick={props.setLogin}>
                    Google
                </a>
                <button className={styles.buttonLogin}>
                    Facebook
                </button>
                <button className={styles.buttonLogin}>
                    Instagram
                </button>
            </div>
        </div>
    )
}
