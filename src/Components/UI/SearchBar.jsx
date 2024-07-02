import { useContext, useState } from "react";
import MarvelContext from "../../Context/GlobalContext";

import styles from "../../Assets/Styles/Search.module.css";
import { searchCharacter } from "../../Utils/FetchApi";

import { ColorRing } from "react-loader-spinner";
import SearchCards from "../Character/SearchCards";
// import Error404 from "./Error";

function SearchBar() {
    const {
        setSearch,
        search,
        setSingleCharacter,
        setError,
        setSearchedCharacter,
    } = useContext(MarvelContext);

    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    // useEffect(() => {
    //     if (!search) {
    //         setCharacter(""); // Clear the character input when the search is closed
    //         setSearchResults([]); // Clear search results
    //     }
    // }, [search]);

    function capitalizeFirstLetter(string) {
        if (!string) return string;

        return string
            .split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await searchCharacter(
                capitalizeFirstLetter(character)
            );
            if (!data || data.length === 0) {
                throw new Error(`No results found for ${character}`);
            }

            setSearchResults(data);
            setError(false);
        } catch (error) {
            setSearch(false);
            setSearchedCharacter(character);
            setSingleCharacter([]);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSelectCharacter = (character) => {
        setSingleCharacter(character);
        setSearch(false);
    };

    return (
        <>
            {search && (
                <section className={styles.search__container}>
                    <section
                        className={`w-full flex items-center justify-center ${styles.search__section}`}>
                        <form
                            className={styles.search__form}
                            onSubmit={handleSubmit}>
                            <input
                                className={styles.search__input}
                                type='search'
                                name='character'
                                id='character'
                                value={character ? character : ""}
                                autoComplete='off'
                                onChange={(e) => setCharacter(e.target.value)}
                                placeholder='Search Character'
                            />
                            <span
                                className={`material-symbols-outlined ${styles.search__searchIcon}`}>
                                search
                            </span>
                        </form>
                        <button
                            className='cursor-pointer w-10 pt-1'
                            onClick={() => {
                                setSearch(!search);
                            }}>
                            <span className='material-symbols-outlined'>
                                close
                            </span>
                        </button>
                    </section>
                    {loading && (
                        <span
                            className='w-full flex items-center justify-center'
                            style={{ maxHeight: "125px" }}>
                            <ColorRing
                                visible={true}
                                height='80'
                                width='80'
                                ariaLabel='color-ring-loading'
                                wrapperStyle={{}}
                                wrapperClass='color-ring-wrapper'
                                colors={[
                                    "#3e0007",
                                    "#560007",
                                    "#6e0006",
                                    "#870006",
                                    "#a00103",
                                ]}
                            />
                        </span>
                    )}
                    <section
                        className={`flex items-center justify-evenly mt-4 flex-wrap w-full overflow-y-scroll ${styles.search__scroll}`}>
                        {searchResults.map((res, index) => {
                            return (
                                <SearchCards
                                    key={`${res.id}-${index}`}
                                    name={res.name}
                                    img={res.thumbnail}
                                    id={res.id}
                                    onSelect={() => handleSelectCharacter(res)}
                                />
                            );
                        })}
                    </section>
                </section>
            )}
        </>
    );
}

export default SearchBar;
