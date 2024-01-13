/* eslint-disable no-unused-vars */


import React, { createContext, useState } from "react";

export const StateContext = createContext();

// eslint-disable-next-line react/prop-types
const StateContextProvider = ({children}) => {
    const [value, setValue] = useState(0);

    return (
        <StateContext.Provider value={{ value, setValue }}>
            {children}
        </StateContext.Provider>
    );
};

export default StateContextProvider;