import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Loader from "./Loader";

function Menus() {
  const [menu, setMenu] = useState([]);
  const [menuCategories, setMenuCategories] = useState([]); //ivde array kodukkne console cheythappm kityethu arrayan so emtyp array koduth
  const [loading, setLoading] = useState(true);

  async function getAllThemenus() {
    setLoading(true);
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    let response = await fetch(API_URL);
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
    // console.log("mealdata",data);
  }

  async function getAllThecategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategories(categoryData.categories);
    // console.log("catdatas",categoryData);
  }

  useEffect(() => {
    getAllThemenus();
    getAllThecategories();
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
      <Hero />
      {/* conditional statement enthina eyuthiyen vechal eg:-chicken click cheyyumb chickente dishes kaanikunilla thu solve cheyyan vendiyan */}
      {!loading ? (
        <SpecialDishes specialMenu={menu} />
      ) : (
        <Loader/>
      )}
      {!loading ? (
        <FilteredDishes allMenuCategories={menuCategories} allMenus={menu} />
      ) : null}
      {/* {!loading && <SpecialDishes specialMenu={menu} />}
      { !loading ? (
       <FilteredDishes allMenuCategories={menuCategories} allMenus={menu}/> 
       ): null}  */}
    </div>
  );
}

export default Menus;
