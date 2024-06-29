import React from "react";
import "../../Assets/Styles/MainInfo.css";
import { useContext } from "react";
import MarvelContext from "../../Context/GlobalContext";

const MainInfo = () => {
    const { singleCharacter } = useContext(MarvelContext);

    console.log(singleCharacter);

    const handleSpeak = () => {
        if (singleCharacter.description) {
            const name = new SpeechSynthesisUtterance(singleCharacter.name);
            speechSynthesis.speak(name);
            const desc = new SpeechSynthesisUtterance(
                singleCharacter.description
            );
            speechSynthesis.speak(desc);
        } else {
            alert(
                `There's not description for the ${singleCharacter.name} character, try with another one`
            );
        }
    };

    return (
        <section className='text-white px-4 text-left title-section w-full'>
            <h1 className='text-2xl font-extrabold font-mono uppercase title'>
                {singleCharacter.name}
            </h1>
            {singleCharacter.series && (
                <h2 className='seasons text-lg font-thin'>
                    {singleCharacter.series.available} Series
                </h2>
            )}
            <span className='w-10 bg-white mt-1 mb-4 py-0.5 block'></span>
            <button className='playButton' onClick={handleSpeak}>
                <span className='material-symbols-outlined'>play_circle</span>
            </button>
        </section>
    );
};

export default MainInfo;
