import React from 'react'

//Reused component
function CardDish(props) {
    // function showPopuHandler(){
    //     alert("Show popup now")
    // }
  return (
    <>
         <li>
            {/* <a href="javaScript:;" onClick={props.showPopup}> */}
            <a href="javaScript:;" onClick={()=>props.showPopup(props.menuItem.strMeal)}> {/*ivde njmk callback unction upayogichu vilikkam enthinnan vechal callback upayogichal mathrame ithilek data pass cheyyan pattullu*/}
            <img src={props.menuItem.strMealThumb} alt="" className="br-10"/>
            <h5>{props.menuItem.strMeal}</h5>
            </a>
          </li> 
    </>
  )
}

export default CardDish