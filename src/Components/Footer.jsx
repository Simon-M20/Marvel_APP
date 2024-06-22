import { useContext } from "react";
import MarvelContext from "../Context/GlobalContext";

function Footer() {
    const { singleCharacter } = useContext(MarvelContext);
    return (
        <footer>
            <p>
                more about <span>{singleCharacter.name}</span>
            </p>
            <button className='rotate-90'>
                <span className='material-symbols-outlined'>
                    arrow_forward_ios
                </span>
            </button>
        </footer>
    );
}

export default Footer;
