const baseURL = "https://swapi.dev/api/";

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

export async function getHomeworld(planetsURL) {
    try {
        const response = await fetch(`${planetsURL}`);
        const data = await response.json();
        return data.name;
    } catch (error) {
        console.error(error);
    }
}