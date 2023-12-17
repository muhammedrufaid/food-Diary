import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";
import Header from "./Header";

//step1 & 3
//Create a global context that can be shared to be its children
//This is a named export
export const AllMenuContext = React.createContext()

function Menus() {
  const [menu, setMenu] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]); //ivde array kodukkne console cheythappm kityethu arrayan so emtyp array koduth
  const [loading, setLoading] = useState(true);
  const [singleDish, setSingleDish] = useState([]);

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

   //Get all the categories
  async function getAllThecategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategories(categoryData.categories);
    // console.log("catdatas",categoryData);
  }

  //Get only one Dish
  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
    console.log("single dish dta",singleDish);
  }



// api call functionil aakit useEffect il vilichu
  useEffect(() => {
    getAllThemenus()
    getAllThecategories()
    getOnlyOneDish()
  }, []);

  // useEffect(async()=>{
  //     const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  //     let response = await fetch(API_URL);
  //     let data = await response.json();
  //     setMenu(data)
  //     // console.log(data);
  // },[])

  // console.log("The Menus are",menu);
  // let menuImages =menu.map((item)=>{
  //     // console.log(item.strCategory);
  //     // console.log(item.strMealThumb);
  //     return(
  //         <div>
  //             <img src={item.strMealThumb} alt="" />
  //             <h2>{item.strCategory}</h2>
  //         </div>
  //     )
  // })

  return (
    <div>
      <Header/>
      <Hero />

      {/* step2 */}
      <AllMenuContext.Provider value={menu}>

      {/* conditional statement enthina eyuthiyen vechal eg:-chicken click cheyyumb chickente dishes kaanikunilla thu solve cheyyan vendiyan */}
      {/* {!loading ?  <SpecialDishes specialMenu={menu} /> : <Loader/> } */}
      {!loading ?  <SpecialDishes /> : <Loader/> }
      {!loading ? (
        <FilteredDishes 
           allMenuCategories={menuCategories}
          //  allMenus={menu} //props oyvaki...context
           singleDish ={singleDish} 
           setSingleDish = {setSingleDish}
        />
      ) : null}

      {/* {!loading && <SpecialDishes specialMenu={menu} />}
      { !loading ? (
       <FilteredDishes allMenuCategories={menuCategories} allMenus={menu}/> 
       ): null}  */}

       </AllMenuContext.Provider>
    </div>
  );
}

export default Menus;
