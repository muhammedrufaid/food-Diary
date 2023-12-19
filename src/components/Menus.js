import React from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";

import Header from "./Header";
import {AllMenus} from "./AllMenuContext";
import {BrowserRouter as Router ,Routes, Route } from 'react-router-dom'


function Menus() {
 

  return (
    <div>
      <Header />
      <Hero />

    {/* context */}
      <AllMenus> 
        <SpecialDishes/>
        <FilteredDishes/>
      </AllMenus>
    </div>
  );
}

export default Menus;
