import styles from './PageTranslate.module.scss'

import FloatButton from "../../components/FloatButton/FloatButton";
import TranslateForms from '../../components/TranslateForms/TranslateForms';

export function PageTranslate() {
    return (
        <div className={styles.main}>
            <div className={styles.header}> Super Translator </div>
            <TranslateForms />
            <div className={styles.history}>
                <h1 className={styles.cr}>Created by me</h1>
                <h1 className={styles.title}>History</h1>
                <FloatButton />
            </div>
        </div>
    )
}