import { useContext } from "react";
import styles from "../../Assets/Styles/Details.module.css";
import MarvelContext from "../../Context/GlobalContext";

function Details() {
    const { singleCharacter } = useContext(MarvelContext);

    return (
        <section className={styles.details__container}>
            <section className={`${styles.details__options}`}>
                <button
                    className={`${styles.details__option} ${styles.option__selected}`}>
                    description
                </button>
            </section>
            <section className='h-full flex items-center justify-center'>
                <p className='p-4'>
                    {singleCharacter.description ? (
                        singleCharacter.description
                    ) : (
                        <>
                            Not all heroes have their stories written yet. This
                            character (
                            <span style={{ color: "#ff0000" }}>
                                {singleCharacter.name}
                            </span>
                            ) is one of the many secrets waiting to be uncovered
                            in the Marvel Universe.
                        </>
                    )}
                </p>
            </section>
        </section>
    );
}

export default Details;
