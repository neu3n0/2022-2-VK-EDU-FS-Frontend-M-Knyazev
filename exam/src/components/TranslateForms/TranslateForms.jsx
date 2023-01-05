import { useEffect, useState } from 'react';
import styles from './TranslateForms.module.scss'

import { translate } from '../../utils/translate'

import FormOut from '../FormOut/FormOut';
import FormIn from '../FormIn/FormIn';

import { getLangs } from '../../utils/getLangs';
import SaveIcon from '@mui/icons-material/Save';

export default function TranslateForms() {
    const [inp, setInp] = useState('');
    const [output, setOut] = useState('');
    const [langs, setLangs] = useState([]);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        getLangs(setLangs);
    }, [])

    useEffect(() => {
        translate(inp, setOut, lang);
    }, [inp, lang])

    function handleChange(val) {
        setInp(val);
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
                <p>Target language: {lang}</p>
                <select className={styles.lang} onClick={(e) => { setLang(e.target.value);}}>
                    {listLangs}
                </select>
            </div>
            <div className={styles.wrapper}>
                <FormIn inp={inp} setInp={handleChange} handleSubmit={handleSubmit} />
                <FormOut output={output} />
            </div>
            <div className={styles.hh}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>save to history: </div>
                <div className={styles.save}>
                    <SaveIcon  onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

