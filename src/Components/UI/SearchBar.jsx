import { useContext, useState } from "react";
import MarvelContext from "../../Context/GlobalContext";

import styles from "../../Assets/Styles/Search.module.css";
import { searchCharacter } from "../../Utils/FetchApi";

function SearchBar() {
    const { setSearch, search, setSingleCharacter, setError, setLoading } =
        useContext(MarvelContext);

    const [character, setCharacter] = useState(null);

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
            // console.log(data, "DATA FROM THE SEARCH");
            // console.log(character, "CHARACTER FROM THE SEARCH");
            if (data === undefined) {
                setError(true);
            }
            setSingleCharacter(data);
        } catch (error) {
            setError(true);
        } finally {
            setSearch(false);
            setLoading(false);
            setError(false);
        }
    };

    return (
        <>
            {search && (
                <section className={styles.search__container}>
                    <section className='w-full flex items-center justify-center'>
                        <form
                            className={styles.search__form}
                            onSubmit={handleSubmit}>
                            <input
                                className={styles.search__input}
                                type='search'
                                name='character'
                                id='character'
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
                                console.log(search);
                            }}>
                            <span className='material-symbols-outlined'>
                                close
                            </span>
                        </button>
                    </section>
                </section>
            )}
        </>
    );
}

export default SearchBar;
