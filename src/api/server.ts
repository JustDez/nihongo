export const serverCalls = {
    translator:async (userInput:string) => {
        const url = 'https://sa-translate.p.rapidapi.com/translate';
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'dcee341314mshc03cc5b579f95a5p1e8034jsnd97a07463636',
                'X-RapidAPI-Host': 'sa-translate.p.rapidapi.com'
            },
            body: JSON.stringify({
              text: userInput,
              targetLanguage: 'ja'
          })
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return(result);
        } catch (error) {
            console.error(error);
        }
    }
}