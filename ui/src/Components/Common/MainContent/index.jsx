import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../../Pages/Dashboard';
import Partners from '../../../Pages/Partners';
import Products from '../../../Pages/Products';
import FeesandCharges from '../../../Pages/Fees&Charges';
import EndBorrowers from '../../../Pages/EndBorrowers';
import DMS from '../../../Pages/DMS/dms';
import DocumentMaster from '../../../Pages/DocumentMaster';
import Reports from '../../../Pages/Reports/reports';
import './style.scss';
import PartnerOnBoarding from "../../../Pages/Partners/onboarding";
import PartnerView from "../../../Pages/Partners/partnerview";
import ProductOnBoarding from '../../../Pages/Products/onboarding';
import CreateFees from "../../../Pages/Fees&Charges/createFees";
import ProductView from '../../../Pages/Products/productView';

// Create Product Screens
import ProductSchemaComponent from "../../../Pages/Partners/PartnerStepper/Product-Schema";
import SopComponent from '../../../Pages/Partners/PartnerStepper/sopconfiguration';
import { ConfigureFilter, InitialFilter, Summary } from '../../../Pages/Partners/PartnerStepper/creditfilter';
import { Createloan, Updateloan, Agrementsigned, PostDispDocument } from "../../../Pages/Partners/PartnerStepper/sopconfiguration";
import FeesAndChargesView from "../../../Pages/Fees&Charges/feesAndChargesView";
import DmsProduct from '../../../Pages/DMS/DmsStepper/dmsProduct';
import DmsEndBorrower from '../../../Pages/DMS/DmsStepper/dmsEndBorrower';
import DmsLNID from "../../../Pages/DMS/DmsStepper/dmsLNID";
import DmsFile from '../../../Pages/DMS/DmsStepper/dmsFile';
import { SopContextProvider } from "../../../Context/SopContext";
import { UpdateCreditFilterContextProvider } from '../../../Context/UpdateCreditFilterContext';
import ViewEndBorrowerDetails from "../../../Pages/EndBorrowers/viewEndBorrowerDetails";
import ViewBasicDetailEndBorrower from "../../../Pages/EndBorrowers/viewBasicDetailEndBorrower";
import SearchResultPage from "../Header/searchResultPage";

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        {/*Search Result Page*/}
        <Route path="/search/:search_input" element={<SearchResultPage />} />

        {/*Menu Pages*/}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/products" element={<Products />} />
        <Route path="/fees-and-charges" element={<FeesandCharges />} />
        <Route path="/end-borrowers" element={<EndBorrowers />} />
        <Route path="/documents" element={<DMS />} />
        <Route path="/document-master" element={<DocumentMaster />} />
        <Route path="/reports" element={<Reports />} />

        {/*Child Pages  */}
        <Route path="/partners/onboarding" element={<PartnerOnBoarding />} />
        <Route path="/partners/view/:partner_id" element={<PartnerView />} />
        <Route path="/products/onboarding" element={<ProductOnBoarding />} />
        <Route path="/products/view/:product_id" element={<UpdateCreditFilterContextProvider>< ProductView /></UpdateCreditFilterContextProvider>} />

        {/*Fees & Charges*/}
        <Route path="/fees-and-charges/create" element={<CreateFees />} />
        <Route path="/fees-and-charges/view/:fees_id" element={<FeesAndChargesView />} />

        {/* Create Product Screens  */}
        {/* <Route path="/products/create/productdetails" element={<ProductDetails />} />
        <Route path="/products/create/emiconfiguration" element={<EmiConfiguration />} />
        <Route path="/products/create/terms" element={<Terms />} />
        <Route path="/products/create/settings" element={<Settings />} />
        <Route path="/products/create/disbursements" element={<Disbursements />} />
        <Route path="/products/create/collections" element={<Collections />} />
        <Route path="/products/create/servicerfeeinterest" element={<ServicerFeeInterest />} /> */}
        <Route path="/products/create/product-schema" element={<ProductSchemaComponent />} />


        {/* ------------------SOP Configuration-------------------------- */}
        <Route path="/products/create/sop-configuration" element={<SopComponent />} />

        {/* <Route path="/products/create/createloan" element={ <SopContextProvider><Createloan /></SopContextProvider>} />
        <Route path="/products/create/updateloan" element={<SopContextProvider><Updateloan /></SopContextProvider>} />
        <Route path="/products/create/agreementsigned" element={<SopContextProvider><Agrementsigned /></SopContextProvider>} />
        <Route path="/products/create/postdisb.document" element={<SopContextProvider><PostDispDocument /></SopContextProvider>} /> */}


        {/* ------------------Credit Filter----------------- */}
        <Route path="/products/create/initialfilter" element={<UpdateCreditFilterContextProvider><InitialFilter /></UpdateCreditFilterContextProvider>} />
        <Route path="/products/create/configurefilter" element={<UpdateCreditFilterContextProvider><ConfigureFilter /></UpdateCreditFilterContextProvider>} />
        <Route path="/products/create/summary" element={<UpdateCreditFilterContextProvider><Summary /></UpdateCreditFilterContextProvider>} />

        {/* {------------------------DMS--------------------------------------------} */}
        <Route path="/documents/dmsproduct" element={<DmsProduct />} />
        <Route path="/documents/dmsendborrower" element={<DmsEndBorrower />} />
        <Route path="/documents/dmslnid" element={<DmsLNID />} />
        <Route path="/documents/dmsfile" element={<DmsFile />} />

        {/* ------------------ END BORROWER SCREENS ----------------- */}
        <Route path="/end-borrowers/view/:end_borrower_id" element={<ViewEndBorrowerDetails />} />
        <Route path="/end-borrowers/basicdetail/:end_borrower_id" element={<ViewBasicDetailEndBorrower />} />
      </Routes>
    </div>
  );
};

export default MainContent;
