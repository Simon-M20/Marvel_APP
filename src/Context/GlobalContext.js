import { createContext, useState } from "react";

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    const data = { showMenu, setShowMenu };

    return (
        <MarvelContext.Provider value={data}>{children}</MarvelContext.Provider>
    );
};

export { MarvelProvider };
export default MarvelContext;
