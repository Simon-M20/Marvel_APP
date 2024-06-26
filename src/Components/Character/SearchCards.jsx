import styles from "../../Assets/Styles/SearchCards.module.css";
function SearchCards({ name, img, id, onSelect }) {
    const handleClick = (id) => {
        onSelect();
    };

    return (
        <section
            className='relative mb-4 px-2 w-1/2 h-full'
            style={{ maxHeight: "240px" }}>
            <figure className={styles.card__item}>
                <img
                    src={`${img.path}.${img.extension}`}
                    alt={name}
                    height={"150px"}
                    loading='lazy'
                    className={styles.card__image}
                    onClick={() => handleClick(id)}
                />
                <figcaption
                    className={`${styles.card__image_title} cursor-pointer'`}
                    onClick={() => handleClick(id)}>
                    {name}
                </figcaption>
            </figure>
        </section>
    );
}

export default SearchCards;
