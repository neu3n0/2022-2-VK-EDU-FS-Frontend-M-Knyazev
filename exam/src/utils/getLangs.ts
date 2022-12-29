
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
            // for (let vegetable of response.dictionary.keys()) {
            //     console.log(vegetable); // огурец, помидор, лук
            // }
            setLangs(response.dictionary)
        })
        .catch(err => console.error(err));
}