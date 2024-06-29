import { useContext, useEffect, useState, useRef, useCallback } from "react";
import "../../Assets/Styles/Gallery.css";
import MarvelContext from "../../Context/GlobalContext";
import { getCharacterSeries } from "../../Utils/FetchApi";
import { ColorRing } from "react-loader-spinner";

function Gallery() {
    const [selectedSerie, setSelectedSerie] = useState(null);
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const { singleCharacter, setError } = useContext(MarvelContext);
    const galleryRef = useRef(null);

    const handleClick = (id) => {
        setSelectedSerie(id);
    };

    const loadMoreSeries = useCallback(async () => {
        if (loading) return;
        setLoading(true);
        try {
            const data = await getCharacterSeries(singleCharacter.id, page);
            setSeries((prevSeries) => [...prevSeries, ...data.results]);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [loading, singleCharacter.id, page, setError]);

    useEffect(() => {
        const getSeries = async () => {
            setLoading(true);
            try {
                const data = await getCharacterSeries(singleCharacter.id, 0);
                setSeries(data.results);
                setSelectedSerie(data.results[0]?.id);
                setPage(1);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (singleCharacter.id) {
            getSeries();
        }
    }, [singleCharacter.id, setError]);

    useEffect(() => {
        const handleScroll = () => {
            const gallery = galleryRef.current;
            if (
                gallery.scrollLeft + gallery.clientWidth >=
                gallery.scrollWidth - 200
            ) {
                loadMoreSeries();
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
    }, [loadMoreSeries]);

    // console.log(loading);

    return (
        <section className='gallery-container px-4'>
            <section className='gallery' ref={galleryRef}>
                {series.map((serie, index) => (
                    <figure
                        key={`${serie.id}-${index}`}
                        className='gallery-item'>
                        <img
                            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                            alt={serie.title}
                            className='gallery-image'
                            onClick={() => handleClick(serie.id)}
                        />
                        <figcaption className='image-title'>
                            {serie.title}
                        </figcaption>
                        <span className='button-wrapper'>
                            <button
                                className={`circle-button ${
                                    selectedSerie === serie.id ? "selected" : ""
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
                                "#6e0006",
                                "#870006",
                                "#a00103",
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
