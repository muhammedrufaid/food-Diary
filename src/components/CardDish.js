import React from 'react'

//Reused component
function CardDish(props) {
  return (
    <>
         <li>
            <a href="javaScript:;" onClick={()=>props.showPopup(props.menuItem.strMeal)}> 
            <img src={props.menuItem.strMealThumb} alt="" className="br-10"/>
            <h5>{props.menuItem.strMeal}</h5>
            </a>
          </li> 
    </>
  )
}

export default CardDish