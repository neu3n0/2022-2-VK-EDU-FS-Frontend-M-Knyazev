export async function getLangs(setLangs: any) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'df5ffa97f3mshfa5277882376ad1p1db7b7jsnb69ba524116a',
            'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
            'x-rapidapi-ua': 'RapidAPI-Playground'
        }
    };

    await fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
        .then(response => response.json())
        .then(response => {
            let m: Array<[string, string]> = [];
            for (let key in response.dictionary) {
                m.push([key, response.dictionary[key].name]);
            }
            setLangs(m);
        })
        .catch(err => console.error(err));
}