import React, { useContext, useState } from "react";
import CardDish from "./CardDish";
import Popup from "./Popup";
//step 4
// import {AllMenuContext} from "./Menus";
import {AllMenuContext} from "./AllMenuContext";
import AddTocart from "./AddToCart";


function SpecialDishes(props) {
  // console.log("props are :", props.specialMenu);

 const [showPopUP, setShowPopUP] = useState(false) //false kodukkan kaarenm njmk page load aayi verumbol thanne popup kaanikenda so njml false koduthu
 const [currentDish, setCurrentDish] = useState('') //false kodukkan kaarenm njmk page load aayi verumbol thanne popup kaanikenda so njml false koduthu
//  const [addToCartItem,setAddToCartItem] = useState([{ }])  //imagineyum title neyu edukkan vendi array of objects create cheythu
 const [addToCartItem,setAddToCartItem] = useState([])  //njml object ne oyvaki kaarenm njmk empty aayt addtocart il kaanikum so njml verum array aaki

  

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

  //Add to cart handler
  function addToCartHandler (addToCartImg,addToCartTitle) {
    // console.log("Add to cart now",addToCartImg,addToCartTitle);
    // let addToIMg = addToCartImg  //ingane react il kodukkan patilla js kodukkuna pole athinu pakrem njml reactil oru state create cheythu athil vekkukayan cheyyuka  
    // setAddToCartItem(addToCartImg)
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

  // console.log("whats inside",addToCartItem);

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
                      addToCartHandler={addToCartHandler}
                      // allDishes = {props.specialMenu}
                      // allDishes = {allMenus} //ithu props vayi ayakkunath oyvakit direct context upayogichu data pass cheyyum
                    ></Popup>} {/* circuit method aa ithinu pareyuka ithinu artham showpopup true aanel popup kaanikuka*/}
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
