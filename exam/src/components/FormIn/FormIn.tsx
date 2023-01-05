import styles from './FormIn.module.scss'

export default function FormIn(props: any) {
    const text = props.inp;
    return (
        <div className={styles.main}>
            <form className={styles.inputForm} onSubmit={props.handleSubmit}>
                <textarea className={styles.heh} value={text} placeholder='Enter your text' onChange={(e) => props.setInp(e.target.value)} onKeyPress={e => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        props.handleSubmit(e);
                    }
                }} />
            </form>
        </div>
    )
}

