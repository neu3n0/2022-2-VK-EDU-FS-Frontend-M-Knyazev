export async function translate(value: string, setOut: any, lang: string) {
    const text: string = '[{"Text":"{' + value + '}"}]';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
        },
        body: text
    };
    await fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${lang}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
        .then(response => response.json())
        .then(response => { setOut(response[0].translations[0].text)})
        .catch(err => console.error(err));
}