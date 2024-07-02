import { useContext } from "react";
import MarvelContext from "../../Context/GlobalContext";

function List({ title }) {
    const { setMenuOption } = useContext(MarvelContext);

    return (
        <li className='flex justify-start items-center mb-3 cursor-pointer side_menu-actions'>
            <span className='text-3xl pr-1'>⍟</span>
            <button onClick={() => setMenuOption(title)} className='capitalize'>
                {title}
            </button>
        </li>
    );
}

export default List;
