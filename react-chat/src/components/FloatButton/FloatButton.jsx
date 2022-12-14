import React from 'react'
import '../button.scss'
import EditIcon from '@mui/icons-material/Edit';
import styles from './FloatButton.module.scss'

export default function FloatButton(props) {
    return (
        <div className={styles.fixed_button}>
            <button className="button button-edit">
                <EditIcon/>
            </button>
        </div>
    )
}