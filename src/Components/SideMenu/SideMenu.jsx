import { useContext } from "react";
import MarvelLogo from "../../Assets/marvel-studios-logo.webp";
import "../../Assets/Styles/SideMenu.css";
import MarvelContext from "../../Context/GlobalContext";

const SideMenu = () => {
    const { showMenu, setShowMenu } = useContext(MarvelContext);

    return (
        <aside className={`${showMenu ? "active" : ""} side_menu`}>
            <figure className='w-full mb-10 flex flex-col'>
                <img
                    className='w-1/3'
                    src={MarvelLogo}
                    alt='Marvel Studios Logo'
                />
                <figcaption className='flex justify-start items-start pt-4'>
                    <button
                        className='cursor-pointer'
                        onClick={() => setShowMenu(!showMenu)}>
                        <span className='material-symbols-outlined'>close</span>
                    </button>
                </figcaption>
            </figure>
            <div className='flex justify-end items-center mb-3 cursor-pointer side_menu-actions'>
                <span className='text-3xl pr-1'>⍟</span>
                <span>Home</span>
            </div>
            <div className='flex justify-end items-center mb-3 cursor-pointer side_menu-actions'>
                <span className='text-3xl pr-1'>⍟</span>
                <span>Characters</span>
            </div>
            <div className='flex justify-end items-center mb-3 cursor-pointer side_menu-actions'>
                <span className='text-3xl pr-1'>⍟</span>
                <span>Comics</span>
            </div>
            <div className='flex justify-end items-center mb-3 cursor-pointer side_menu-actions'>
                <span className='text-3xl pr-1'>⍟</span>
                <span>Movies</span>
            </div>
        </aside>
    );
};

export default SideMenu;
