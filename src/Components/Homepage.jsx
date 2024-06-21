import React, { useContext } from "react";
import MarvelContext from "../Context/GlobalContext";
import MainInfo from "./Character/MainInfo";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Character/Gallery";

const Homepage = () => {
    const { showMenu, singleCharacter } = useContext(MarvelContext);
    let characterImg;

    if (singleCharacter.thumbnail) {
        characterImg = `${singleCharacter.thumbnail.path}.${singleCharacter.thumbnail.extension}`;
    }

    return (
        <section
            className={`${showMenu ? "active" : ""} relative px-4 main-section`}
            style={{ backgroundImage: `url(${characterImg})` }}>
            <Header />
            <MainInfo />
            <Gallery />
            <Footer />
        </section>
    );
};

export default Homepage;
