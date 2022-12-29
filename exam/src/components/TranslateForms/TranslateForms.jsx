import { useState } from 'react';
import styles from './TranslateForms.module.scss'

import {translate} from '../../utils/translate'

export default function TranslateForms() {
    const [inp, setInp] = useState('');
    const [output, setOut] = useState('');


    function handleSubmit(val) {
        setInp(val);
        console.log(val);
        translate(val, setOut);
    }

    return (
        <div className={styles.wrapper}>
            <FormIn inp={inp} setInp={handleSubmit} />
            <FormOut output={output}  />
        </div>
    )
}

function FormIn(props) {
    const text = props.inp;
    return (
        <div className={styles.inputForm}>
            <textarea className={styles.heh} type="text" value={text} onChange={(e) => props.setInp(e.target.value)} />
        </div>
    )
}

function FormOut(props) {
    const output = props.output;
    return (
        <div className={styles.inputForm}>
            <textarea className={styles.heh} type="text" value={output} onChange={() => {}} />
        </div>
    )
}