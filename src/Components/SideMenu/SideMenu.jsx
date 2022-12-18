import "boxicons";
import MarvelLogo from "../../Assets/marvel-studios-logo.png";

const SideMenu = () => {
    return (
        <aside>
            <figure>
                <img src={MarvelLogo} alt='Marvel Studios Logo' />
            </figure>
            <i>⍟</i>
        </aside>
    );
};

export default SideMenu;
