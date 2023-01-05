import axios from 'axios';
import { IAM_token, folderId } from './keys';

import { detectLanguage } from './detectLanguage';

export let cache: { [key: string]: string; } = {};

export async function translate(text: string, targetLang: string, sourceLang?: string,): Promise<string> {

    const head = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + IAM_token,
        }
    };

    const sourceLangRes = sourceLang ? sourceLang : await detectLanguage(text);

    let hash: string = sourceLangRes + text + targetLang;

    if (hash in cache) {
        return cache[hash];
    }

    const bodyParameters = {
        folderId: folderId,
        sourceLanguageCode: sourceLangRes,
        targetLanguageCode: targetLang,
        texts: text,
    };

    const data = await axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate', bodyParameters, head);
    // console.log(data.data.translations[0].text);
    cache[hash] = data.data.translations[0].text;
    return data.data.translations[0].text;
}

export { detectLanguage };
