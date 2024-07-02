import { useContext } from "react";
import MarvelContext from "../Context/GlobalContext";

function Footer({ details, setDetails }) {
    const { singleCharacter } = useContext(MarvelContext);
    return (
        <footer className={`${details ? "footerBg" : ""}`}>
            <button onClick={() => setDetails(!details)}>
                <p className='capitalize'>
                    {details ? "less" : "more"} about{" "}
                    <span>{singleCharacter.name}</span>
                </p>
                <span
                    className={`material-symbols-outlined ${
                        details ? "-rotate-90" : "rotate-90"
                    }`}>
                    arrow_forward_ios
                </span>
            </button>
        </footer>
    );
}

export default Footer;
