import React, { useState, createContext, useEffect } from "react";
import { getCharacters, getMoreCharacters } from "./helper/api";

export const CharactersContext = createContext();

export const CharactersProvider = (props) => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [next, setNext] = useState();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getCharacters();
        setCharacters(data.results);
        setNext(data.next);
        setLoading(false);
    };

    const fetchMoreData = async () => {
        if (next) {
            const moreData = await getMoreCharacters(next);
            setCharacters([...characters, ...moreData.results]);
            setNext(moreData.next);
        }
    };

    return (
        <CharactersContext.Provider value={[characters, next, fetchMoreData, isLoading]}>
            {props.children}
        </CharactersContext.Provider>
    );
};
