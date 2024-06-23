import { useContext, useEffect, useState } from "react";
import "../../Assets/Styles/Gallery.css";
import MarvelContext from "../../Context/GlobalContext";
import { getCharacterSeries } from "../../Utils/FetchApi";

function Gallery() {
    const [selectedSerie, setSelectedSerie] = useState(1);
    const [series, setSeries] = useState([]);
    const { singleCharacter, setError } = useContext(MarvelContext);

    const handleClick = (id) => {
        setSelectedSerie(id);
    };

    useEffect(() => {
        const getSeries = async () => {
            try {
                const data = await getCharacterSeries(singleCharacter.id);
                const promises = data.results.map(async (series) => {
                    return series;
                });
                const results = await Promise.all(promises);
                setSeries(results);
                setSelectedSerie(results[0]?.id);
            } catch (error) {
                setError(true);
            }
        };

        if (singleCharacter.id) {
            getSeries();
        }
    }, [singleCharacter.id, setError]);

    return (
        <section className='gallery-container'>
            <section className='gallery'>
                {series.map((serie) => (
                    <section key={serie.id} className='gallery-item'>
                        <img
                            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                            alt={serie.title}
                            className='gallery-image'
                            onClick={() => handleClick(serie.id)}
                        />
                        <section className='image-title'>{serie.title}</section>
                        <section className='button-wrapper'>
                            <button
                                className={`circle-button ${
                                    selectedSerie === serie.id ? "selected" : ""
                                }`}
                                onClick={() => handleClick(serie.id)}
                            />
                        </section>
                    </section>
                ))}
            </section>
            <section className='line'></section>
        </section>
    );
}

export default Gallery;
