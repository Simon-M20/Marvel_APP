import { useContext } from "react";
import MarvelLogo from "../Assets/marvel-studios-logo.webp";
import "../Assets/Styles/Header.css";
import MarvelContext from "../Context/GlobalContext";

const Header = () => {
    const { showMenu, setShowMenu, setSearch, search } =
        useContext(MarvelContext);

    return (
        <header className='header px-4'>
            <nav className='py-4'>
                <ul className='flex items-center justify-between mx-auto'>
                    <li className='cursor-pointer'>
                        <button
                            className='animate-tada'
                            onClick={() => setShowMenu(!showMenu)}>
                            <span className='material-symbols-outlined'>
                                notes
                            </span>
                        </button>
                    </li>
                    <li>
                        <figure className='w-full flex justify-center items-center'>
                            <img
                                className='w-1/2 cursor-pointer'
                                src={MarvelLogo}
                                alt='Marvel Studios Logo'
                            />
                        </figure>
                    </li>
                    <li className='cursor-pointer searchButton'>
                        <button
                            onClick={() => {
                                setSearch(!search);
                            }}>
                            <span className='material-symbols-outlined'>
                                search
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
