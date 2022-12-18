import { createContext, useState } from "react";

const MarvelProvider = ({ children }) => {
    const data = {};

    return (
        <MarvelContext.Provider value={data}>{children}</MarvelContext.Provider>
    );
};

export { MarvelProvider };
export default MarvelContext;
