import React from "react";
import "../../Assets/Styles/MainInfo.css";

const MainInfo = () => {
    return (
        <section className='text-white text-left px-6'>
            <h1 className='text-2xl font-extrabold font-mono uppercase title'>
                Jessica Jones
            </h1>
            <h2 className='seasons'>3 Seasons</h2>
            <button>
                <span class='material-symbols-outlined'>play_circle</span>
            </button>
        </section>
    );
};

export default MainInfo;
