import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";

import {AllMenuContext} from "./AllMenuContext";
import AddTocart from "./AddToCart";


function SpecialDishes(props) {

 const [showPopUP, setShowPopUP] = useState(false) 
 const [currentDish, setCurrentDish] = useState('') 
 const [addToCartItem,setAddToCartItem] = useState([]) 

 const allMenus =  useContext(AllMenuContext)
 console.log("Global state menus are here now : ",allMenus);

 // Lets show the popup
 function showPopUPHandler(dishName){
   setShowPopUP(true)
   setCurrentDish(dishName)

  }
  
  // Lets close the popup
  function closePopUPHandler(){
    setShowPopUP(false)
  }

  //Add to cart handler
  function addToCartHandler (addToCartImg,addToCartTitle) {
    setAddToCartItem(
      [
      ...addToCartItem,  //spread operator aayi add cheythu athu kodukkmbm illa gunam enthen vechal addtocart il ordernow kodukkbm ellm add aavum 1 imageum mathramella veruka 
        {
          "img" : addToCartImg,
          "title" : addToCartTitle
        }
      ]
    )
  }

  let maxSpecialDishes = 8;

  let specialMenus = allMenus.map((menuItem,index) => {
    if(index < maxSpecialDishes){  //index currently -0 aanu
        return (
          // <li>
          //   <img src={menuItem.strMealThumb} alt="" className="br-10"/>
          //   <h5>{menuItem.strMeal}</h5>
          // </li>
          <CardDish
           menuItem={menuItem}
           showPopup={showPopUPHandler}
          />
        );
    }
  });

  return (
    <section className="special-dishes">
      {showPopUP && <Popup 
                      closePopUp={closePopUPHandler}
                      currentDish={currentDish}
                      addToCartHandler={addToCartHandler}
                    ></Popup>} 
      <div className="container" >
        <AddTocart  addToCartItem = {addToCartItem}/>
        <div className="special-dishes-content text-center">
          <h2>Our Special Dishes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            atque amet laborum impedit omnis ducimus autem! Ipsum optio
            explicabo dolorum architecto! Harum tempora facilis voluptas.
          </p>
        </div>
        <div className="special-dishes-list">
          <ul className="flex flex-wrap gap-30">
            {specialMenus}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
