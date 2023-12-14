import React from "react";

function SpecialDishes(props) {
  // console.log("props are :", props.specialMenu);

  let maxSpecialDishes = 8;

  let specialMenus = props.specialMenu.map((menuItem,index) => {
    if(index < maxSpecialDishes){  //index currently -0 aanu
        return (
          <li>
            <img src={menuItem.strMealThumb} alt="" className="br-10"/>
            <h5>{menuItem.strMeal}</h5>
          </li>
        );
    }
  });

  return (
    <section className="special-dishes">
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
