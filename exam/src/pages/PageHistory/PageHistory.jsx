import styles from './PageHistory.module.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export function PageHistory() {
    const [history, ] = useState(JSON.parse(localStorage.getItem('history')));

    const listHistory = history.length !== 0 && history.map((hist) =>
        <div className={styles.hist} key={hist} style={{ textDecoration: 'none', color: '#333' }}>
            {hist[0] + ": " + hist[1].slice(0, hist[1].length - 1).slice(1)}
        </div>
    );

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <Link to="/">
                    <button className={styles.button_back}>
                        <ArrowBackIcon />
                    </button>
                </Link>
            </div>
            <div className={styles.history}>
                {listHistory}
            </div>
        </div>
    )
}