import React from "react";
import "../../Assets/Styles/MainInfo.css";
import { useContext } from "react";
import MarvelContext from "../../Context/GlobalContext";

const MainInfo = () => {
    const { singleCharacter } = useContext(MarvelContext);
    // console.log(singleCharacter);
    return (
        <section className='text-white text-left title-section w-full'>
            <h1 className='text-2xl font-extrabold font-mono uppercase title'>
                {singleCharacter.name}
            </h1>
            {singleCharacter.series && (
                <h2 className='seasons text-lg font-thin'>
                    {singleCharacter.series.available} Seasons
                </h2>
            )}
            <span className='w-10 bg-white mt-1 mb-4 py-0.5 block'></span>
            <button className='playButton'>
                <span className='material-symbols-outlined'>play_circle</span>
            </button>
        </section>
    );
};

export default MainInfo;
