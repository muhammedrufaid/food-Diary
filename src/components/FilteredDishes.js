// import React, { useState, useEffect } from "react";
import React, { useContext, useState } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
import {AllMenuContext} from './Menus'

function FilteredDishes(props) {
  // console.log("All menus", props.allMenus);
  // console.log("All menus categories", props.allMenuCategories);
  // console.log("single Dish props", props.singleDish);
  console.log("single Dish props", props.setSingleDish);

  let allMenus = useContext(AllMenuContext)

  // const [allMenus, setAllMenus] = useState(props.allMenus);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeDish, setActiveDish] = useState("Beef"); //active dishes il athyam thanne active aayi kedakendath beef aanu so beef koduht
  const [currentPage, setCurrentPage] = useState(1); //current pageil active aayi nikkendath 1 aanu so 1 kodukkum ,cuurentpageil maarunathinanusrichu njmla dishes maarenm athinuvendi setCurrentPage upayogikum
  const [itemsPerPage, setItemsPerPage] = useState(4); 

  let indexOfLastDish = currentPage * itemsPerPage;
  //  1 * 4  = 4  //current page increment cheythu kodutha mathi
  //  2 * 4  = 8
  //  3 * 4  = 12  
  let indexOfFirstDish = indexOfLastDish - itemsPerPage
  // 4  - 4 =  0
  // 8  - 4 =  4
  // 12 - 4 =  8

  //slice
  let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)

  //Lets show only single dishes
  let maxItem = 8
  let singleDishItems = props.singleDish.map((item,index) => {
    if(index < maxItem){
      return (
        <li>
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5>{item.strMeal}</h5>
        </li>
      )
    }
  });

  // Lets show Dishes onClick
  function showFilteredDishesHandler(category) {
    props.setSingleDish([])
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => item.strCategory === category)
      // .map((item) => (
      .map((menuItem) => { //menu item aakyah jm reused comnent aanu create cheyyune CardDish ileyum SpecialDishes nu pass cheythath menu item nnan appm athe name koduthu ivdeyum
        // <li key={item.idMeal}>
        return(
          // <li>
          //   <img src={item.strMealThumb} className="br-10" alt="" />
          //   <h5>{item.strMeal}</h5>
          // </li>
          <CardDish menuItem = {menuItem}/>
        )
       
  });

    setFilteredDishes(filteredDishesAre);
  }
  // console.log("filtered dishes array length",filteredDishes.length);

  // Log the state changes inside a useEffect
  //   useEffect(() => {
  //     console.log("setFilteredDishes", filteredDishes);
  //   }, [filteredDishes]);

  // Lets show all categories
  let allcategories = props.allMenuCategories.map((item) => (
    // <li key={item.idCategory} onClick={() => showFilteredDishesHandler(item.strCategory)}>
    <li
      className={item.strCategory === activeDish ? "active" : ""}
      onClick={() => showFilteredDishesHandler(item.strCategory)}
    >
      {item.strCategory}
    </li>
  ));

  //Rendering
  return (
    <div className="filtred-dishes">
      <div className="container">
        <div className="text-center">
          <h2>Choose your dishes</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            maxime. Natus earum, mollitia maxime id possimus debitis minima
            animi numquam?
          </p>
        </div>

        <div className="filterd-dishes">
          <ul>{allcategories}</ul>
        </div>

        <div className="filtered-dishes-results">
          <ul className="flex flex-wrap gap-30">
            {singleDishItems}
                            {/* not equal to 0 */}
            {/* {filteredDishes.length > 0 ? ( */}
            {singleDishItems !=0 || filteredDishes.length !=0 ? (
              //filteredDishes
              showTheseDishesNow
            ) : 
            <div className="alert">
                <h3>Sorry, No items found.</h3>
                <h4>Please try another dishes</h4>
            </div>
            }
          </ul>
        </div>

        <Pagination
          filteredDishes = {filteredDishes}
          itemsPerPage = {itemsPerPage}
          currentPage = {currentPage}
          setCurrentPage = {setCurrentPage}
        >
        </Pagination>
      </div>
    </div>
  );
}

export default FilteredDishes;
