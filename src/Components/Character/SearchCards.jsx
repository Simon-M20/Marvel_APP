// import { useState } from "react";

function SearchCards({ name, img, id, onSelect }) {
    // const [selectedCard, setSelectedCard] = useState(null);

    const handleClick = (id) => {
        // setSelectedCard(id);
        onSelect();
    };

    return (
        <section
            className='relative mb-6 w-1/2 h-full'
            style={{ maxHeight: "240px" }}>
            <figure className='gallery-item'>
                <img
                    src={`${img.path}.${img.extension}`}
                    alt={name}
                    height={"150px"}
                    className='gallery-image'
                    onClick={() => handleClick(id)}
                />
                <figcaption
                    className='image-title cursor-pointer'
                    onClick={() => handleClick(id)}>
                    {name}
                </figcaption>
                {/* <span className='button-wrapper'>
                    <button
                        className={`circle-button ${
                            selectedCard === id ? "selected" : ""
                        }`}
                        onClick={() => handleClick(id)}
                    />
                </span> */}
            </figure>
        </section>
    );
}

export default SearchCards;
