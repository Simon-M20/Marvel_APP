import React from "react";
import "../../Assets/Styles/MainInfo.css";
import { useContext } from "react";
import MarvelContext from "../../Context/GlobalContext";

const MainInfo = () => {
    const { singleCharacter, menuOption } = useContext(MarvelContext);

    const handleSpeak = () => {
        if (singleCharacter.description) {
            const name = new SpeechSynthesisUtterance(singleCharacter.name);
            speechSynthesis.speak(name);
            const desc = new SpeechSynthesisUtterance(
                singleCharacter.description
            );
            speechSynthesis.speak(desc);
        } else {
            let message = `Not all heroes have their stories written yet. This
                            character (
                            ${singleCharacter.name}
                            ) is one of the many secrets waiting to be uncovered
                            in the Marvel Universe.`;
            const newMess = new SpeechSynthesisUtterance(message);
            speechSynthesis.speak(newMess);
        }
    };

    const menuOptions = {
        series: { label: "Series", data: singleCharacter.series },
        comics: { label: "Comics", data: singleCharacter.comics },
        events: { label: "Events", data: singleCharacter.events },
        stories: { label: "Stories", data: singleCharacter.stories },
    };

    const selectedOption = menuOptions[menuOption];

    return (
        <section className='text-white px-4 text-left title-section w-full'>
            <h1 className='text-2xl font-extrabold font-mono uppercase title'>
                {singleCharacter.name}
            </h1>
            {selectedOption && selectedOption.data && (
                <h2 className='seasons text-lg font-thin'>
                    {selectedOption.data.available} {selectedOption.label}
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
