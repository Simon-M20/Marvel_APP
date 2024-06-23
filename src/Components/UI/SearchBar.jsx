import { useContext } from "react";
import MarvelContext from "../../Context/GlobalContext";

import styles from "../../Assets/Styles/Search.module.css";

function SearchBar() {
    const { setSearch, search } = useContext(MarvelContext);
    return (
        <>
            {search && (
                <section className={styles.search__container}>
                    <form>
                        <input
                            type='search'
                            name='character'
                            id='character'
                            placeholder='Search Character'
                        />
                        <span className='material-symbols-outlined'>
                            search
                        </span>
                    </form>
                    <button
                        className='cursor-pointer'
                        onClick={() => {
                            setSearch(!search);
                            console.log(search);
                        }}>
                        <span className='material-symbols-outlined'>close</span>
                    </button>
                </section>
            )}
        </>
    );
}

export default SearchBar;
