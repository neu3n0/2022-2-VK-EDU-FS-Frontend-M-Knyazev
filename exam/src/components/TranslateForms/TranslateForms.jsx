import { useState } from 'react';
import styles from './TranslateForms.module.scss'

import {translate} from '../../utils/translate'

export default function TranslateForms() {
    const [inp, setInp] = useState('');
    const [output, setOut] = useState('');


    function handleSubmit(val) {
        setInp(val);
        console.log(val);
        translate();
    }

    return (
        <div className={styles.wrapper}>
            <FormIn inp={inp} setInp={handleSubmit} />
            <FormOut inp={output} setInp={(val) => {setOut(val);}} />
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
            <textarea className={styles.heh} type="text" value={output} onChange={(e) => props.setOut(e.target.value)} />
        </div>
    )
}