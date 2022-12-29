import axios from 'axios';
import { IAM_token, folderId } from './keys';

import { detectLanguage } from './detectLanguage'; 

export async function translate(text: string, targetLang: string, sourceLang?: string,) {

    const head = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + IAM_token,
        }
    };

    const bodyParameters = {
        folderId: folderId,
        sourceLanguageCode: sourceLang ? sourceLang : await detectLanguage(text),
        targetLanguageCode: targetLang,
        texts: text,        
    };

    const data = await axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate', bodyParameters, head);
    console.log(data.data.translations[0].text); 
}

translate("how r u", 'ru')
