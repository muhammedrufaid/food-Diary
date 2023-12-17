import React, { useContext } from "react";
//step 7
import { AllMenuContext } from "./Menus";

// function Popup({ closePopUp, currentDish, allDishes }) {
function Popup({ closePopUp, currentDish }) {
  // console.log("lets see full dishes here",allDishes);
   
  //step 8
  const allMenus = useContext(AllMenuContext)

//   let dishDetails = allDishes
                    //step 9
  let dishDetails = allMenus
    .filter((menuItem) => {
      return menuItem.strMeal === currentDish;
    })
    .map((item) => {
      return (
        //return kodukkunath jsx ine return cheyyan vendiyan
        <div className="popup-content-data">
          <div className="popup-header">
            <img src={item.strMealThumb} alt="" />
            <h5 className="popup-header-category">{item.strCategory}</h5>
          </div>

          <h2>{item.strMeal}</h2>
          <p>{item.strInstructions}</p>

          <ul className="dish-ingredients flex">
            <li>{item.strIngredient1}</li>
            <li>{item.strIngredient2}</li>
            <li>{item.strIngredient3}</li>
            <li>{item.strIngredient4}</li>
          </ul>
        </div>
      );
    });
  return (
    <div className="popup">
      <div className="popup-content">
        {/* <h2>{currentDish}</h2> */}
        {dishDetails} {/* ivde render cheythu */}
        <button>Order Now</button>
        <h5 className="popup-close" onClick={closePopUp}>
          Close
        </h5>
      </div>
    </div>
  );
}

export default Popup;
