import React, { useContext } from "react";
import MarvelContext from "../../Context/GlobalContext";
import MainInfo from "../Character/MainInfo";
import Header from "../Header";
import MainBg from "../MainBg";

const Homepage = () => {
    const { showMenu } = useContext(MarvelContext);

    return (
        <section
            className={`${showMenu ? "active" : ""} relative main-section`}>
            <MainBg />
            <Header />
            <MainInfo />
        </section>
    );
};

export default Homepage;
