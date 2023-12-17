import React from "react";

function Pagination(props) {
  // console.log("filtered dishes recieved", props.filteredDishes);
  let numberOfPages = [];

  //njmk venath index value anu because index position vechanu njml cheyyan pokunath elland arraylulla itemsine yella
  for (let i = 1; i <=Math.ceil (props.filteredDishes.length / props.itemsPerPage); i++) {
    // console.log(i);
    numberOfPages.push(i);
  }
  console.log(numberOfPages);

  function showNextDishesHAndler(event){
    // console.log("please show next set of Dishes");
    // console.log(event);
    // console.log(event.target); //target kodukkmbm aa list item ne njmk kittum eg:- <li id="1">1</li>
    console.log(event.target.id); //eni ithile id aanu njmk edukande eg- 1clcik cheyyumbm 1 kttum 2 clcik cheyumbm 2 kittum ...
   let currentPage =event.target.id
    props.setCurrentPage(currentPage)
}

  let pages = numberOfPages.map((pageNumber) =>{
    return(
        <li id={pageNumber} onClick={showNextDishesHAndler}>{pageNumber}</li>
    )
  })

  return (
    <section >
      <ul className="pagination flex">
       {pages}
      </ul>
    </section>
  );
}

export default Pagination;
