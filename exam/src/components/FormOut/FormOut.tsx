import styles from '../FormIn/FormIn.module.scss'

export default function FormOut(props: any) {
    const output = props.output.slice(0, props.output.length - 1).slice(1);
    return (
        <div className={styles.main}>
            <form className={styles.inputForm} onSubmit={props.handleSubmit}>
                <textarea className={styles.heh} placeholder='Translated text' value={output} onChange={() => {}} />
            </form>
        </div>
    )
}