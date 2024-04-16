import React from 'react';
import Repositories from "../../Pages/Repositories/Repositories";
import Contributors from "../../Pages/Contributors/Contibutors";
import Overview from '../../Pages/Overview/Overview';
import {Routes,Route} from 'react-router-dom';

function AppRoutes(){
    return (
            <Routes>
                <Route path="/" element={<Overview/>}></Route>
                <Route path="/Repositories" element={<Repositories/>}></Route>
                <Route path="/Repositories/Details" element={<Contributors/>}></Route>
            </Routes>
    )
}
export default AppRoutes;