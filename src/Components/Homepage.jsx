import React, { useContext } from "react";
import MarvelContext from "../Context/GlobalContext";
import MainInfo from "./Character/MainInfo";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Character/Gallery";
import Loader from "./UI/Loader";

const Homepage = () => {
    const { showMenu, singleCharacter, loading } = useContext(MarvelContext);
    let characterImg;

    if (loading) {
        return <Loader />;
    }

    if (singleCharacter.thumbnail) {
        characterImg = `${singleCharacter.thumbnail.path}.${singleCharacter.thumbnail.extension}`;
    }

    return (
        <section
            className={`${showMenu ? "active" : ""} relative px-4 main-section`}
            style={{ backgroundImage: `url(${characterImg})` }}>
            <Header />
            <section className='w-full '>
                <MainInfo />
                <Gallery />
                <Footer />
            </section>
        </section>
    );
};

export default Homepage;
