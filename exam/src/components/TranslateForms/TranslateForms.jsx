import { useEffect, useState } from 'react';
import styles from './TranslateForms.module.scss'

import { translate } from '../../utils/translate'

import FormOut from '../FormOut/FormOut';
import FormIn from '../FormIn/FormIn';

import { getLangs } from '../../utils/getLangs';

export default function TranslateForms() {
    const [inp, setInp] = useState('');
    const [output, setOut] = useState('');
    const [langs_, setLangs] = useState({});

    useEffect(() => {
        getLangs(setLangs);
    }, [])

    console.log(langs_)

    function handleChange(val) {
        setInp(val);
        console.log(val);
        translate(val, setOut);
    }

    function handleSubmit(e) {
        if (inp === '') return;
        e.preventDefault();
        let history = JSON.parse(localStorage.getItem('history'));
        if (history === null) {
            history = [];
        }
        history.push([inp, output]);
        localStorage.setItem('history', JSON.stringify(history));
    }


    const langs = ['ru', 'eu']

    let listLangs = langs.length !== 0 && langs.map((lang) =>
        <option key={lang} style={{ textDecoration: 'none', color: '#333' }}>
            {lang}
        </option>
    );

    return (
        <div>
            <div>
                <select className={styles.lang}>
                    {listLangs}
                </select>
            </div>
            <div className={styles.wrapper}>
                <FormIn inp={inp} setInp={handleChange} handleSubmit={handleSubmit} />
                <FormOut output={output} />
            </div>
        </div>
    )
}

