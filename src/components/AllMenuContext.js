import React ,{ useState, useEffect } from "react";
import Loader from "./Loader";

export const AllMenuContext = React.createContext();

export const AllMenus = (props) => {
    
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

  //Get all the menus
  async function getAllThemenus() {
    setLoading(true);
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
    // console.log("mealdata",data);
  }

  useEffect(() => {
    getAllThemenus();
  }, []);

  return (
    <AllMenuContext.Provider value={menu}>
         {!loading ? props.children : <Loader />} 
          {/* {props.children} */}
    </AllMenuContext.Provider>
  );
};

