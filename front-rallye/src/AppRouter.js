import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";

const AppRouter=() =>{
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Route>
        </Routes>
    </Router>
}

export default AppRouter;