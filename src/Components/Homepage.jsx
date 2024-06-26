import React, { useContext } from "react";
import MarvelContext from "../Context/GlobalContext";
import MainInfo from "./Character/MainInfo";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Character/Gallery";
import Loader from "./UI/Loader";
import SearchBar from "./UI/SearchBar";
import Error404 from "./UI/Error";

const Homepage = () => {
    const { showMenu, singleCharacter, loading, search, error } =
        useContext(MarvelContext);
    let characterImg;

    if (loading) return <Loader />;

    if (error || singleCharacter === undefined) return <Error404 />;

    if (search) return <SearchBar />;

    if (singleCharacter.thumbnail) {
        characterImg = `${singleCharacter.thumbnail.path}.${singleCharacter.thumbnail.extension}`;
    }

    return (
        <>
            {singleCharacter !== undefined && (
                <section
                    className={`${
                        showMenu ? "active" : ""
                    } relative px-4 main-section`}
                    style={{ backgroundImage: `url(${characterImg})` }}>
                    <Header />
                    <section className='w-full '>
                        <MainInfo />
                        <Gallery />
                        <Footer />
                    </section>
                </section>
            )}
        </>
    );
};

export default Homepage;
