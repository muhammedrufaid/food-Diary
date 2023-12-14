import React, { useState, useEffect } from "react";

function FilteredDishes(props) {
  console.log("All menus", props.allMenus);
  console.log("All menus categories", props.allMenuCategories);

  const [allMenus, setAllMenus] = useState(props.allMenus);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [activeDish, setActiveDish] = useState();

  // show Dishes onClick
  function showFilteredDishesHandler(category) {
    setActiveDish(category)
    let filteredDishesAre = allMenus
      .filter((item) => item.strCategory === category)
      .map((item) => (
        // <li key={item.idMeal}>
        <li>
          <img src={item.strMealThumb} className="br-10" alt="" />
          <h5>{item.strCategory}</h5>
        </li>
      ));

    setFilteredDishes(filteredDishesAre);
  }

  // Log the state changes inside a useEffect
//   useEffect(() => {
//     console.log("setFilteredDishes", filteredDishes);
//   }, [filteredDishes]);

  // lets show all categories
  let allcategories = props.allMenuCategories.map((item) => (
    // <li key={item.idCategory} onClick={() => showFilteredDishesHandler(item.strCategory)}>
    <li className={item.strCategory === activeDish ? "active" : ""}
     onClick={() => showFilteredDishesHandler(item.strCategory)}>
      {item.strCategory}
    </li>
  ));

  //Rendering
  return (
    <div className="filterd-dishes">
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
            {filteredDishes}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilteredDishes;