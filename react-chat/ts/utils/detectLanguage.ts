import axios from 'axios';
import { IAM_token, folderId } from './keys';

export async function detectLanguage(text: string) : Promise<string> {

    const head: any = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + IAM_token,
        }
    };

    const bodyParameters: any = {
        text: text,
        folderId: folderId,
        languageCodeHints: [
            "en", "ru"
        ],
    };

    const data: any = await axios.post('https://translate.api.cloud.yandex.net/translate/v2/detect', bodyParameters, head);
    // console.log(data.data.languageCode);
    return data.data.languageCode;
}