import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "../../Assets/Styles/Details.module.css";
import MarvelContext from "../../Context/GlobalContext";
import SearchCards from "./SearchCards";
import { getStories } from "../../Utils/FetchApi";

function Details() {
    const { singleCharacter, setError } = useContext(MarvelContext);

    const [stories, setStories] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const storiesRef = useRef(null);

    const options = ["description", "stories", "comics", "events"];
    const [optionSelected, setOptionSelected] = useState(options[0]);
    //     const { description, stories, comics, events } = singleCharacter;

    console.log(singleCharacter.stories.items);

    const handleClick = (option) => {
        setOptionSelected(option);
    };

    //     const loadMoreStories = useCallback(async () => {
    //         if (loading) return;
    //         setLoading(true);
    //         try {
    //             const data = await getStories(singleCharacter.id, page);
    //             setStories((prevStories) => [...prevStories, ...data.results]);
    //             setPage((prevPage) => prevPage + 1);
    //         } catch (error) {
    //             setError(true);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }, [loading, singleCharacter.id, page, setError]);

    useEffect(() => {
        const getStories = async () => {
            setLoading(true);
            try {
                const data = await getStories(singleCharacter.id, 0);
                setStories(data.results);
                // setSelectedSerie(data.results[0]?.id);
                setPage(1);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (singleCharacter.id) {
            getStories();
        }
    }, [singleCharacter.id, setError]);

    //     useEffect(() => {
    //         const handleScroll = () => {
    //             const storieSection = storiesRef.current;
    //             if (
    //                 storieSection.scrollLeft + storieSection.clientWidth >=
    //                 storieSection.scrollWidth - 200
    //             ) {
    //                 loadMoreStories();
    //             }
    //         };

    //         const storieSection = storiesRef.current;
    //         if (storieSection) {
    //             storieSection.addEventListener("scroll", handleScroll);
    //         }

    //         return () => {
    //             if (storieSection) {
    //                 storieSection.removeEventListener("scroll", handleScroll);
    //             }
    //         };
    //     }, [loadMoreStories]);

    return (
        <section className={styles.details__container}>
            <section className={`${styles.details__options} gap-4`}>
                {options.map((option, index) => {
                    return (
                        <button
                            key={index}
                            className={`${styles.details__option} ${
                                optionSelected === option
                                    ? styles.option__selected
                                    : ""
                            }`}
                            onClick={() => handleClick(option)}>
                            {option}
                        </button>
                    );
                })}
            </section>
            <section>
                {optionSelected === "description" && (
                    <p className='pt-4'>
                        {singleCharacter.description ? (
                            singleCharacter.description
                        ) : (
                            <>
                                Not all heroes have their stories written yet.
                                This character (
                                <span style={{ color: "#ff0000" }}>
                                    {singleCharacter.name}
                                </span>
                                ) is one of the many secrets waiting to be
                                uncovered in the Marvel Universe.
                            </>
                        )}
                    </p>
                )}
                {
                    optionSelected === "stories" && (
                        <section ref={storiesRef}></section>
                    )
                    //     stories.items.map((item, index) => {
                    //         return (
                    //             <SearchCards
                    //                 key={`${item.id}-${index}`}
                    //                 name={item.name}
                    //                 id={item.id}
                    //                 img={item.thumbnail}
                    //             />
                    //         );
                    //     })
                }
            </section>
        </section>
    );
}

export default Details;
