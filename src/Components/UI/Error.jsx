import { useContext } from "react";
import styles from "../../Assets/Styles/Error404.module.css";
import strangeLogo from "../../Assets/doctor-strange-minimal.webp";
import Header from "../Header";
import MarvelContext from "../../Context/GlobalContext";
import SearchBar from "./SearchBar";

function Error404() {
    const { showMenu, search } = useContext(MarvelContext);

    if (search) return <SearchBar />;

    return (
        <section
            className={`${styles.error__container} text-gray-400 ${
                showMenu ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${strangeLogo})` }}>
            <Header />
            <section className={styles.error__message}>
                <p className='text-3xl font-semibold'>Error 404</p>
                <h1
                    className={`${styles.error__title} uppercase font-extrabold antialiased text-white`}>
                    oops
                </h1>
                <p className='text-2xl uppercase'>the empty-verse</p>
                <button className={styles.error__button}>
                    back to the universe
                </button>
            </section>
        </section>
    );
}

export default Error404;
