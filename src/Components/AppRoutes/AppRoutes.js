import React from 'react';
import Overview from '../../Pages/Overview/Overview';
import Repositories from "../../Pages/Repositories/Repositories";
import Details from '../../Pages/Details/Details';
import {Routes,Route} from 'react-router-dom';
function AppRoutes(){
    return (
            <Routes>
                <Route path="/" element={<Overview/>}></Route>
                <Route path="/Repositories" element={<Repositories/>}>
                    {/* <Route path="/Details" element={<Details/>}/> */}
                </Route>
            </Routes>
    )
}
export default AppRoutes;