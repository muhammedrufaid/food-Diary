import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import CardDish from "./CardDish";
// import {AllMenuContext} from './Menus'
import {AllMenuContext} from './AllMenuContext'

function FilteredDishes(props) {
  const [menuCategories, setMenuCategories] = useState([]);
  const [singleDish, setSingleDish] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeDish, setActiveDish] = useState("Beef"); //active dishes il athyam thanne active aayi kedakendath beef aanu so beef koduht
  const [currentPage, setCurrentPage] = useState(1); //current pageil active aayi nikkendath 1 aanu so 1 kodukkum ,cuurentpageil maarunathinanusrichu njmla dishes maarenm athinuvendi setCurrentPage upayogikum
  const [itemsPerPage, setItemsPerPage] = useState(4); 

  let allMenus = useContext(AllMenuContext)
  

  //Get all the categories
  async function getAllThecategories() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(API_URL);
    let categoryData = await response.json();
    setMenuCategories(categoryData.categories);
  }

  //Get only one Dish
  async function getOnlyOneDish() {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    let response = await fetch(API_URL);
    let singleDishData = await response.json();
    setSingleDish(singleDishData.meals);
  }

  // api call 
  useEffect(() => {
    getAllThecategories();
    getOnlyOneDish();
  }, []);





 

  let indexOfLastDish = currentPage * itemsPerPage;
  //  1 * 4  = 4  //current page increment only
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

  let singleDishItems = singleDish.map((item,index) => {
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
    setSingleDish([])
    setActiveDish(category);
    let filteredDishesAre = allMenus
      .filter((item) => item.strCategory === category)
      .map((menuItem) => { 
        return(
          <CardDish menuItem = {menuItem}/>
        )
       
  });

    setFilteredDishes(filteredDishesAre);
  }
  
  let allcategories = menuCategories.map((item) => (
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
            {singleDishItems !=0 || filteredDishes.length !=0 ? (
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
