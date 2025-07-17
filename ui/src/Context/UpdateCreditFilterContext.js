import {createContext, useState} from "react";
export const UpdateCreditFilterContext=createContext();

export function UpdateCreditFilterContextProvider ({ children}) {
    const [edit,setEdit]=useState(false);
    return <UpdateCreditFilterContext.Provider value={
        {edit,setEdit}
        }>
        {children}
        </UpdateCreditFilterContext.Provider>
}