import styles from "../../Assets/Styles/Loader.module.css";
import loader from "../../Assets/marvel loader.gif";

function Loader() {
    return (
        <section className={styles.loader}>
            <figure>
                <img src={loader} alt='Marvel Studios logo' />
            </figure>
        </section>
    );
}

export default Loader;
