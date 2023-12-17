import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
//step 4
import {AllMenuContext} from "./Menus";


function SpecialDishes(props) {
  // console.log("props are :", props.specialMenu);

 const [showPopUP, setShowPopUP] = useState(false) //false kodukkan kaarenm njmk page load aayi verumbol thanne popup kaanikenda so njml false koduthu
 const [currentDish, setCurrentDish] = useState('') //false kodukkan kaarenm njmk page load aayi verumbol thanne popup kaanikenda so njml false koduthu
 
 //step 5
 const allMenus =  useContext(AllMenuContext)
 console.log("Global state menus are here now : ",allMenus);

 // Lets show the popup
 function showPopUPHandler(dishName){ //parameter aayi recieve cheythu cardil ninnu //itu cheyunnath popup il aa name disply cheyikkan vendiyan
  // console.log(dishName);
   setShowPopUP(true)
   setCurrentDish(dishName)

  }
  
  // Lets close the popup
  function closePopUPHandler(){
    setShowPopUP(false)
  }


  let maxSpecialDishes = 8;

  // let specialMenus = props.specialMenu.map((menuItem,index) => {
                      //step6
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
                      // allDishes = {props.specialMenu}
                      // allDishes = {allMenus} //ithu props vayi ayakkunath oyvakit direct context upayogichu data pass cheyyum
                    ></Popup>} {/* circuit method aa ithinu pareyuka ithinu artham showpopup true aanel popup kaanikuka*/}
      <div className="container">
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
