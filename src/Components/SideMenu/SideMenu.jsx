import { useContext } from "react";
import MarvelLogo from "../../Assets/marvel-studios-logo.webp";
import "../../Assets/Styles/SideMenu.css";
import MarvelContext from "../../Context/GlobalContext";
import List from "./List";

const SideMenu = () => {
    const { showMenu, setShowMenu } = useContext(MarvelContext);

    const menu = ["series", "comics", "events", "stories"];

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
            <ul>
                {menu.map((title, index) => {
                    return <List key={index} title={title} />;
                })}
            </ul>
        </aside>
    );
};

export default SideMenu;
