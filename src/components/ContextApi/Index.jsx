import { createContext } from "react";



// step 1
export const BioContext = createContext();

// step 2

export const BioProvider = ({children}) => {
    const myName = "yadav"
    return (
<BioContext.Provider value={myName}>
{children}
</BioContext.Provider>
    )
}