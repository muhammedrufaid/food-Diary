import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import {AllMenus} from "./AllMenuContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from "./Checkout";
import { AppProvider } from "../context/AppProvider";


function Menus() {
 
  return (
    <div>
      <Router>
        <AppProvider>

            <Header />
            <Hero />
            
          <Routes>
          <Route  path="/" element={
              <AllMenus> {/*context*/}
                <SpecialDishes />
                <FilteredDishes />
              </AllMenus> 
            } />

            <Route path="/checkout" element={<Checkout />} /> 
          </Routes>

        </AppProvider>
      </Router>
      
    </div>
  );
}

export default Menus;
