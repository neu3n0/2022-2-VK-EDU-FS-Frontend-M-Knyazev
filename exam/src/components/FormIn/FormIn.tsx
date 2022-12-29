import styles from './FormIn.module.scss'

export default function FormIn(props: any) {
    const text = props.inp;
    return (
        <div className={styles.main}>
            <form className={styles.inputForm} onSubmit={props.handleSubmit}>
                <input className={styles.heh} value={text} onChange={(e) => props.setInp(e.target.value)} />
            </form>
        </div>
    )
}

