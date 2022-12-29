import axios from 'axios';
import { IAM_token, folderId } from './keys';

import { detectLanguage } from './detectLanguage'; 

export async function translate(value: string) {

    // const head = {
    //     headers: {
    //         Accept: 'application/json',
    //         Authorization: 'Bearer ' + IAM_token,
    //     }
    // };

    // const bodyParameters = {
    //     folderId: folderId,
    //     sourceLanguageCode: sourceLang,
    //     targetLanguageCode: targetLang,
    //     texts: text,        
    // };

    // const data = await axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate', bodyParameters, head);
    // // console.log(data.data.translations[0].text); 
    // console.log(1)
    // const text: string = "{"+ value" +"}";
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: '[{"Text":"{I would really like to drive your car around the block a few times.}"}]'
    };
    
    fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=ru&api-version=3.0&profanityAction=NoAction&textType=plain', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    
}




// translate("how r u", 'ru')