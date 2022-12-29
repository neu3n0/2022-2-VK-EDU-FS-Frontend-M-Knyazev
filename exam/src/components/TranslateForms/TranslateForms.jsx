import { useEffect, useState } from 'react';
import styles from './TranslateForms.module.scss'

import { translate } from '../../utils/translate'

import FormOut from '../FormOut/FormOut';
import FormIn from '../FormIn/FormIn';

import { getLangs } from '../../utils/getLangs';

export default function TranslateForms() {
    const [inp, setInp] = useState('');
    const [output, setOut] = useState('');
    const [langs, setLangs] = useState([]);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        getLangs(setLangs);
    }, [])



    function handleChange(val) {
        setInp(val);
        translate(val, setOut, lang);
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

    let listLangs = langs.length !== 0 && langs.map((lang) =>
        <option key={lang[0]} style={{ textDecoration: 'none', color: '#333' }}>
            {lang[0]}
        </option>
    );

    return (
        <div>
            <div>
                
                <select className={styles.lang} onClick={(e) => {setLang(e.target.value); translate(inp, setOut, e.target.value);}}>
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

