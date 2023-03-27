const baseURL = 'https://swapi.dev/api/';

export const getCharacters = async () => {
    try {
        const response = await fetch(`${baseURL}/people/`);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

export const getMoreCharacters = async (next) => {
    try {
        const response = await fetch(next);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};
