import { useContext, useEffect, useState, useRef, useCallback } from "react";
import "../../Assets/Styles/Gallery.css";
import MarvelContext from "../../Context/GlobalContext";
import { getCharacterInfo } from "../../Utils/FetchApi";
import { ColorRing } from "react-loader-spinner";

import notAvailable from "../../Assets/image_not_available.webp";

function Gallery() {
    const [selectedResult, setSelectedResult] = useState(null);
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);

    const { singleCharacter, setError, menuOption } = useContext(MarvelContext);

    const galleryRef = useRef(null);
    const prevCharacterId = useRef(singleCharacter.id);
    const prevMenuOption = useRef(menuOption);

    const handleClick = (id) => {
        setSelectedResult(id);
    };

    const loadMore = useCallback(async () => {
        if (loading) return;
        setLoading(true);
        try {
            const data = await getCharacterInfo(
                singleCharacter.id,
                page,
                menuOption
            );
            setResults((prevInfo) => [...prevInfo, ...data.results]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [loading, singleCharacter.id, page, setError, menuOption]);

    // useEffect(() => {
    //     const getInfo = async () => {
    //         setResults([]);
    //         setLoading(true);
    //         try {
    //             const data = await getCharacterInfo(
    //                 singleCharacter.id,
    //                 0,
    //                 menuOption
    //             );
    //             setResults(data.results);
    //             setSelectedResult(data.results[0]?.id);
    //             setPage(1);
    //         } catch (error) {
    //             setError(true);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     if (
    //         singleCharacter.id &&
    //         (singleCharacter.id !== prevCharacterId.current ||
    //             menuOption !== prevMenuOption.current)
    //     ) {
    //         getInfo();
    //         prevCharacterId.current = singleCharacter.id;
    //         prevMenuOption.current = menuOption;
    //     }
    // }, [singleCharacter.id, setError, menuOption]);

    const getInfo = useCallback(async () => {
        setResults([]);

        setLoading(true);
        try {
            const data = await getCharacterInfo(
                singleCharacter.id,
                0,
                menuOption
            );
            setResults(data.results);
            setSelectedResult(data.results[0]?.id);
            setPage(1);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [singleCharacter.id, menuOption, setError]);

    // Initial fetch
    useEffect(() => {
        if (singleCharacter.id) {
            getInfo();
        }
    }, [singleCharacter.id, getInfo]);

    // Subsequent updates
    useEffect(() => {
        if (
            singleCharacter.id &&
            (singleCharacter.id !== prevCharacterId.current ||
                menuOption !== prevMenuOption.current)
        ) {
            getInfo();
            prevCharacterId.current = singleCharacter.id;
            prevMenuOption.current = menuOption;
        }
    }, [singleCharacter.id, menuOption, getInfo]);

    useEffect(() => {
        const handleScroll = () => {
            const gallery = galleryRef.current;
            if (
                gallery.scrollLeft + gallery.clientWidth >=
                gallery.scrollWidth - 200
            ) {
                loadMore();
            }
        };

        const gallery = galleryRef.current;
        if (gallery) {
            gallery.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (gallery) {
                gallery.removeEventListener("scroll", handleScroll);
            }
        };
    }, [loadMore]);

    return (
        <section className='gallery-container px-4'>
            <section className='gallery' ref={galleryRef}>
                {results.length > 0 &&
                    results.map((serie, index) => (
                        <figure
                            key={`${serie.id}-${index}`}
                            className='gallery-item'>
                            {serie.thumbnail ? (
                                <img
                                    src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                                    alt={serie.title}
                                    className='gallery-image'
                                    onClick={() => handleClick(serie.id)}
                                />
                            ) : (
                                <img
                                    src={notAvailable}
                                    alt={serie.title}
                                    className='gallery-image'
                                    onClick={() => handleClick(serie.id)}
                                />
                            )}
                            <figcaption className='image-title'>
                                {serie.title}
                            </figcaption>
                            <span className='button-wrapper'>
                                <button
                                    className={`circle-button ${
                                        selectedResult === serie.id
                                            ? "selected"
                                            : ""
                                    }`}
                                    onClick={() => handleClick(serie.id)}
                                />
                            </span>
                        </figure>
                    ))}
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
                                "#e62429",
                                "#ff0000",
                                "#222222",
                            ]}
                        />
                    </span>
                )}
            </section>
            <span className='line'></span>
        </section>
    );
}

export default Gallery;
