import HistoryIcon from '@mui/icons-material/History';
import styles from './FloatButton.module.scss'
import { Link } from 'react-router-dom'

export default function FloatButton(props: any) {
    return (
        <div className={styles.fixed_button}>
            <Link to="/history">
                <button className={styles.button_edit}>
                    <HistoryIcon />
                </button>
            </Link>
        </div>
    )
}