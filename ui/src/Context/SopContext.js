import { useState, createContext, useEffect } from "react";
import { createLoanData,updateLoanData,AgreementData } from "../Pages/Partners/PartnerStepper/sopconfiguration/mockSOPdata";
export const SopContext=createContext();

export function SopContextProvider ({children}) {
    const [createloansections,setcreateloanSections]=useState([]);
    const [updateloansections,setupdateloanSections]=useState([]);
    const [agreementsections,setagreementSections]=useState([]);
    const [postdisbsections,setpostdisbSections]=useState([]);

    useEffect(() => {
        setcreateloanSections(createLoanData[0].sections);
        setupdateloanSections(updateLoanData[0].sections);
        setagreementSections(AgreementData);
        setpostdisbSections(AgreementData); 
    }, [])

    return <SopContext.Provider value={
        {createloansections,setcreateloanSections,
         updateloansections,setupdateloanSections,
         agreementsections,setagreementSections,
         postdisbsections,setpostdisbSections}
        }>
        {children}</SopContext.Provider>
}
