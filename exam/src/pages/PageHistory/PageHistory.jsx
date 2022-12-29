import stylesTranslate from '../PageTranslate/PageTranslate.module.scss'
import styles from './PageHistory.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

export function PageHistory() {
    return (
        <div className={stylesTranslate.main}>
            <div className={styles.header}>
                <Link to="/">
                    <button className={styles.button_back}>
                        <ArrowBackIcon />
                    </button>
                </Link>
            </div>
            <div className={styles.history}>

            </div>
        </div>
    )
}