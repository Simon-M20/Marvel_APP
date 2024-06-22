import { createContext, useEffect, useState } from "react";
import { getCharacters } from "../Utils/FetchApi";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [allCharacters, setAllCharacters] = useState([]);
    const [singleCharacter, setSingleCharacter] = useState([]);

    const getAllCharacters = async () => {
        setLoading(true);

        try {
            const data = await getCharacters();
            const promises = data.results.map(async (character, index) => {
                return character;
            });
            const results = await Promise.all(promises);
            setAllCharacters(results);
            if (results.length > 0) setSingleCharacter(results[0]);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllCharacters();
    }, []);

    const data = {
        showMenu,
        setShowMenu,
        error,
        setError,
        loading,
        setLoading,
        singleCharacter,
        allCharacters,
        setSingleCharacter,
        getAllCharacters,
    };

    return (
        <MarvelContext.Provider value={data}>{children}</MarvelContext.Provider>
    );
};

export { MarvelProvider };
export default MarvelContext;
