import MarvelLogo from "../Assets/marvel-studios-logo.png";
import "../Assets/Styles/Header.css";
import "boxicons";

const Header = () => {
    return (
        <header className='header'>
            <nav className='py-4'>
                <ul className='flex items-center justify-between mx-auto w-4/5'>
                    <li className='cursor-pointer'>
                        <box-icon
                            name='menu-alt-left'
                            animation='tada-hover'
                            color='white'></box-icon>
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
                    <li className='cursor-pointer'>
                        <box-icon name='search-alt-2' color='white'></box-icon>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
